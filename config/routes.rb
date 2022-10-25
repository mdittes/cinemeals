Rails.application.routes.draw do
  resources :tags, only: [:index, :show, :create, :destroy]
  #resources :meals
  resources :movies
  #resources :users

  post '/signup', to: 'users#create'
  post '/login', to: 'users#login'
  get '/profile', to: 'users#show'
  post '/logout', to: 'users#logout'
  patch '/users/:id', to: 'users#update'
  get '/users/:id/cinemeals', to: 'users#users_meals'
  get '/cinemeals', to: 'meals#index'
  get '/cinemeals/:id', to: 'meals#show'
  post '/cinemeals', to: 'meals#create'
  patch '/cinemeals/:id', to: 'meals#update'
  delete '/cinemeals/:id', to: 'meals#destroy'
  delete 'movies/:id', to: 'movies#destroy'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

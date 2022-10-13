Rails.application.routes.draw do
  resources :tags
  resources :meals
  resources :movies
  resources :users



  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

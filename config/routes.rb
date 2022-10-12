Rails.application.routes.draw do



  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

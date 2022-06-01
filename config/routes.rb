Rails.application.routes.draw do
  resources :users, only:[:show, :create]

  post "/login", to: "sessions#create"

  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
    
end

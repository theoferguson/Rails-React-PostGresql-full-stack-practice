Rails.application.routes.draw do
  resources :poops
  resources :dogs
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  get '/hello', to: 'application#hello_world'

  get '/dogs', to: 'dogs#index'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

  # Defines the root path route ("/")
  # root "articles#index"
end

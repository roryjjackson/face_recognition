Rails.application.routes.draw do
  get 'home/index'
  namespace :api do
    namespace :v1 do
      resources :movies
      get 'movie_quotes', to: 'movie_quotes#index'
      get 'face_detection', to: 'face_detection#index'
    end
  end

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "home#index"
end

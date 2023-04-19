Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :celebrities
    end
  end

  root "home#index"
end

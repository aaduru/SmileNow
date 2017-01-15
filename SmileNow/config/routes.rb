Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :businesses, only: [:index]

    resources :businesses, only: [:show] do
      resources :reviews, only: [:index, :create, :destroy, :update]
    end
  end

  root "static_pages#root"
end

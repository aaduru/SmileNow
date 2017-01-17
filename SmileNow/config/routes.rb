Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :tags, only: [:index]

    resources :businesses, only: [:show, :index] do
      resources :reviews, only: [:index, :create, :destroy, :update, :show]
    end
  end

  root "static_pages#root"
end

Rails.application.routes.draw do


  namespace :api do
      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        registrations: 'api/auth/registrations'
      }

      namespace 'v1' do
        resources :families
        resources :members do
          resources :events, only: [:show, :create, :update, :destroy]
        end
        resources :events, only: [:index]
        resources :categories, only: [:index]
      end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

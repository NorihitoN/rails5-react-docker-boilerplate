module Api
  module Auth
    class RegistrationsController < DeviseTokenAuth::RegistrationsController 

    private
      def sign_up_params
        params.permit(:username, :email, :password, :password_confirmation)
      end
 
      def account_update_params
        params.permit(:username, :email)
      end
    end
  end
end


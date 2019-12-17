module api
    module v1
        class FamiliesController < ApplicationController
            before_action :authenticate_user!

            def show
                family = current_user.family

                render json: {
                    family: family,
                    is_success: true
                }, status: :ok
            end

            def create
                family = current_user.family_build(family_params)

                if family.save
                    render json: { is_success: true }, status: :ok
                else
                    render json: { error: "Family name was not saved properly." }, status: 404
                end
            rescue => e
                render json: { error: e.message, is_success: false }. status: 404
            end

            def update
                family = current_user.family

                if family.update(family_params)
                    render json: { is_success: true }, status: :ok
            end

            def destroy
            end

            private 
                def family_params
                    params.require(:family).permit(:familyname)
                end
        end
    end
end

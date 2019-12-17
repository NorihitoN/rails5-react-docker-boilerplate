module api
    module v1
        class MembersController < ApplicationController
            before_action :authenticate_user!

            def show 
                member = current_user.family.member

                render json: {
                    member: member,
                    is_success: true
                }, status: :ok
            end

            def create
                member = current_user.family.build(member_params)

                if member.save
                    render json: { is_success: true }, status: :ok
                else
                    render json: { error: "Member was not saved properly." }, status: 404
                end
            rescue => e
                render json: { error: e.message, is_success: false }, status: 404
            end

            def update
                member = current_user.family.member

                if member.update(member_params)
                    render json: { is_success: true }, status: :ok
            end

            def destroy
            end

            private
                def member_params
                    params.require(:member).permit(:member_name, :member_relation, :membar_birthday, :member_gender)
                end
        end
    end
end

module Api
    module V1
        class MembersController < ApplicationController
            before_action :authenticate_api_user!

            def index
                members = current_api_user.family.members

                render json: {
                    members: members.map{ |member| member.attributes.merge(fiscal_age: member.fiscal_age)},
                    is_success: true
                }, status: :ok
            end

            def show 
                member = current_api_user.family.members.find(params[:id])

                render json: {
                    member: member.attributes.merge(fiscal_age: member.fiscal_age),
                    is_success: true
                }, status: :ok
            end

            def create
                member = current_api_user.family.members.build(member_params)

                if member.save
                    render json: { is_success: true }, status: :ok
                else
                    render json: { error: "Member was not saved properly." }, status: 404
                end
            rescue => e
                render json: { error: e.message, is_success: false }, status: 404
            end

            def update
                member = current_api_user.family.members.find(params[:id])

                if member.update(member_params)
                    render json: { is_success: true }, status: :ok
                end
            end

            def destroy
                member = current_api_user.family.member.find(params[:id])

                if member.destroy
                    render json: { is_success: true }, status: :ok
                else
                    render json: { error: "Member was not deleted.", is_success: false}, status: 404
                end
            end

            private
                def member_params
                    params.require(:member).permit(:member_name, :member_relation, :member_birthday, :member_gender)
                end
        end
    end
end

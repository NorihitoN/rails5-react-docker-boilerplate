module Api
  module V1
    class EventsController < ApplicationController
    before_action :authenticate_api_user!

    def index
      events = current_member.events

      render json: {
        events: events,
        is_success: true
      }, status: :ok
    end

    def show 
      event = current_member.events.find(params[:id])

      render json: {
        event: event,
        is_success: true
      }, status: :ok
    end

    def create
      event = current_member.events.build(event_params)

      if event.save
        
        start_value = event.start_value 
        category_id = event.category_id
        subcategory_id = event.subcategory_id
        interest_rate = event.interest_rate
        event_id = event.id

        if event.category.category_type == "income"
          (event.start_year..end).map.with_index do |year, index|
            current_member.incomes.create(income_value: start_value * (1*interest_rate)**index, event_id: event_id, category_id: category_id, income_year: year, subcategory_id: subcategory_id)
          end
        elsif event.category.category_type == "expense"
          (event.start_year..end).map.with_index do |year, index|
            current_member.expenses.create(expense_value: start_value * (1+interest_rate)**index, event_id: event_id,  category_id: category_id, expense_year: year, subcategory_id: subcategory_id)
          end
        end

        render json: { is_success: true }, status: :ok
      else
        render json: { error: "Event was not saved properly." }, status: 404
      end

      rescue => e
        render json: { error: e.message, is_success: false }, status: 404
    end

    def update
      event = current_api_user.event

      if event.update(event_params)
        render json: { is_success: true }, status: :ok
      end
    end

    def destroy
      event = current_api_user.event

      if event.destroy
        render json: { is_success: true }, status: :ok
      else
        render json: { error: "Event was not deleted.", is_success: false}, status: 404
      end
    end

    private 
      def event_params
        params.require(:event).permit(:start_value, :start_year, :end_year, :interval_year, :interest_rate, :event_memo, :category_id, :subcategory_id)
      end

      def current_member
        Member.where(member_id)
      end

    end
  end
end

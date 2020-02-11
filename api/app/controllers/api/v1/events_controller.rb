module Api
  module V1
    class EventsController < ApplicationController
    before_action :authenticate_api_user!

    # Need to refactoring to GET current_member for index, show, create, delete, update
    # Need to refactoring to CREATE_EVENT_AND_INCOME/EXPENSE

    def index
      current_member = Member.find(params[:member_id])
      events = current_member.events
      render json: {
        events: events,
        is_success: true
      }, status: :ok
    end

    def show 
      current_member = Member.find(params[:member_id])
      event = current_member.events.find(params[:id])

      render json: {
        event: event,
        is_success: true
      }, status: :ok
    end

    def create
      current_member = Member.find(params[:member_id])
      event = current_member.events.build(event_params)

      if event.save
        
        start_value = event.start_value 
        category_id = event.category_id
        subcategory_id = event.subcategory_id
        interval_year = event.interval_year
        interest_rate = event.interest_rate
        event_id = event.id
        year_list = (event.start_year..event.end_year).select.each_with_index{ |_,i| i%interval_year==0 }

        if event.category.category_type == "income"
          year_list.map.with_index do |year, index|
            current_member.incomes.create(income_value: start_value * (1+interest_rate)**index, event_id: event_id, category_id: category_id, income_year: year, subcategory_id: subcategory_id)
          end
        elsif event.category.category_type == "expense"
          year_list.map.with_index do |year, index|
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
      current_member = Member.find(params[:member_id])
      event = current_member.events.find(params[:id])
      
      if event.category.category_type == "income"
        event.incomes.destroy_all
      elsif event.category.category_type =="expense"
        event.expenses.destroy_all
      end

      if event.update(event_params)
        
        start_value = event.start_value 
        category_id = event.category_id
        subcategory_id = event.subcategory_id
        interval_year = event.interval_year
        interest_rate = event.interest_rate
        event_id = event.id
        year_list = (event.start_year..event.end_year).select.each_with_index{ |_,i| i%interval_year==0 }

        if event.category.category_type == "income"
          year_list.map.with_index do |year, index|
            current_member.incomes.create(income_value: start_value * (1+interest_rate)**index, event_id: event_id, category_id: category_id, income_year: year, subcategory_id: subcategory_id)
          end
        elsif event.category.category_type == "expense"
          year_list.map.with_index do |year, index|
            current_member.expenses.create(expense_value: start_value * (1+interest_rate)**index, event_id: event_id,  category_id: category_id, expense_year: year, subcategory_id: subcategory_id)
          end
        end

        render json: { is_success: true }, status: :ok
      else
        render json: { error: "Event was not updated properly." }, status: 404
      end

    rescue => e
      render json: { error: e.message, is_success: false }, status: 404
    end

    def destroy
      current_member = Member.find(params[:member_id])
      event = current_member.events.find(params[:id])

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

      def set_current_member
        current_member = Member.find(params[:member_id])
      end

    end
  end
end

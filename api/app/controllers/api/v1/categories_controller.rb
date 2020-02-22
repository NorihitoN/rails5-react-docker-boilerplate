module Api
  module V1
    class CategoriesController < ApplicationController
      before_action :authenticate_api_user!

        def index
          categories = Category.all
          render json: {
            categories: categories.map{ |category| category.attributes.merge(subcategories: Subcategory.where(category_id: category.id))},
            is_success: true
          }, status: :ok
        end
      end
  end
end

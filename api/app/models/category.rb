class Category < ApplicationRecord
    enum category_type: %i[income expense]
    has_many :subcategories, dependent: :destroy
    has_many :events, dependent: :destroy
    has_many :incomes, dependent: :destroy
    has_many :expenses, dependent: :destroy
    validates :category_name, :category_type, presence: true
end

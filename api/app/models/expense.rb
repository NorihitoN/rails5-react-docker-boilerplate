class Expense < ApplicationRecord
  belongs_to :category
  belongs_to :member
  belongs_to :subcategory, optional: true
  belongs_to :event, optional: true
  validates :expense_value, :expense_year, presence: true
end

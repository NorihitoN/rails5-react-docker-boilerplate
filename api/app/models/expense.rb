class Expense < ApplicationRecord
  belongs_to :category
  belongs_to :member
  belongs_to :subcategory
  belongs_to :event
end

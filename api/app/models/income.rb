class Income < ApplicationRecord
  belongs_to :category
  belongs_to :member
  belongs_to :subcategory, optional: true
  belongs_to :event, optional: true
  validates :income_value, :income_year, presence: true
end

class Event < ApplicationRecord
  belongs_to :member
  belongs_to :category
  belongs_to :subcategory, optional: true
  has_many :incomes
  has_many :expenses
  validates :start_value, :start_year, :end_year, :interval_year, :interest_rate, presence: true
end

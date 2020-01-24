class Expense < ApplicationRecord
  enum expense_type: [:fixed_expense, :variable_expense, :housing, :education, :dream, :other_regular, :other_temporaty]
  validates :expense_value, :expense_year, :expense_type, presence: true
  belongs_to :member
end

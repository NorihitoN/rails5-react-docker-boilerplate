class Income < ApplicationRecord
  enum income_type: [:salary, :business, :real_estate, :other_regular, :other_temporaty]
  validates :income_value, :income_year, :income_type, presence: true
  belongs_to :member
end

class Subcategory < ApplicationRecord
  belongs_to :category
  has_many :events, dependent: :destroy
  has_many :incomes, dependent: :destroy
  has_many :expenses, dependent: :destroy
  validates :subcategory_name, presence: true
end

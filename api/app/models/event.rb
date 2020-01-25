class Event < ApplicationRecord
  belongs_to :member
  belongs_to :category
  belongs_to :subcategory
end

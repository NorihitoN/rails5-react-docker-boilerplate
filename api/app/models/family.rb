class Family < ApplicationRecord
  belongs_to :user
  has_many :members
  validates :familyname, presence: true
end

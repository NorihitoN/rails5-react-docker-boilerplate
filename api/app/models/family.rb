class Family < ApplicationRecord
  belongs_to :user
  has_many :members, dependent: :destroy
  validates :familyname, presence: true
end

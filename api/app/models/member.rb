class Member < ApplicationRecord
  belongs_to :family
  enum member_relation: [:husband, :wife, :children]
  enum member_gender: [:male, :female]
  validates :member_name, :member_birthday, :member_relation, :member_gender, presence: true
end

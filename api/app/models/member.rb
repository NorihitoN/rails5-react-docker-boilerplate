class Member < ApplicationRecord
  belongs_to :family
  enum member_relation: [:self, :spouse, :child]
  enum member_gender: [:male, :female]
  validates :member_name, :member_birthday, :member_relation, :member_gender, presence: true
  # validate :birthday_is_valid

  has_many :incomes

  def birthday_is_valid
    # Check if input birthday is valide date
    if member_birthday.present? && !Date.parse(member_birthday)
      errors.add(:member_birthday, "input date does not exist.")
    end
  end

  def age 
    today = Date.today()
    today.year - member_birthday.year - ((today.month > member_birthday.month || (today.month == member_birthday.month && today.day >= member_birthday.day)) ? 0 : 1)
  end
  
  def fiscal_age
    today = Date.today()
    case member_birthday.month
    when 1,2,3 then
      today.year - member_birthday.year + 1
    else
      today.year - member_birthday.year
    end
  end
    
end
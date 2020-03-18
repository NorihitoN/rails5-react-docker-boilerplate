FactoryBot.define do
  factory :family do
    familyname { Faker::Name.last_name }
    association :user, factory: :user
  end
end

FactoryBot.define do
  factory :member do
    member_name { Faker::Name.first_name }
    member_relation { rand(3) }
    member_birthday { Faker::Date.birthday(min_age: 0, max_age: 65) }
    member_gender { rand(2) }
    association :family, factory: :family
  end
end

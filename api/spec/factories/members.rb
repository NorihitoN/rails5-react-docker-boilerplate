FactoryBot.define do
  factory :member do
    member_name { "MyString" }
    member_relation { 1 }
    member_birthday { "2019-12-13" }
    member_gender { 1 }
    family { nil }
  end
end

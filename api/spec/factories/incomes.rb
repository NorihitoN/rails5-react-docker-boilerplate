FactoryBot.define do
  factory :income do
    income_value { 1 }
    income_year { 1 }
    income_memo { "MyText" }
    member { nil }
  end
end

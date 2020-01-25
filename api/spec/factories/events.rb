FactoryBot.define do
  factory :event do
    start_value { 1 }
    end_value { 1 }
    member { nil }
    category { nil }
    subcategory { nil }
    interval_year { 1 }
    interest_rate { 1.5 }
    event_memo { "MyString" }
  end
end

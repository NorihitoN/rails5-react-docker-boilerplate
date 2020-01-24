FactoryBot.define do
  factory :expense do
    expense_value { 1 }
    expense_year { 1 }
    expense_type { 1 }
    expense_memo { "MyText" }
    member { nil }
  end
end

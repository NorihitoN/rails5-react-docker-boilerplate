FactoryBot.define do
  factory :expense do
    expense_value { 1 }
    category { nil }
    expense_year { 1 }
    member { nil }
    subcategory { nil }
    event { nil }
  end
end

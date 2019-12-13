FactoryBot.define do 
    factory :user do
        username { Faker::Name.name }
        sequence(:email) { |n| "#{n}_" + Faker::Internet.email }
        password { Faker::Internet.password(min_length: 8) }
    end
end
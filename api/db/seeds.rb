# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# user = User.where(email: 'norihito0626@gmail.com')
# puts user

# family = user.family
# puts family

# members = family.members.create([
#     { member_name: "hus", member_birthday: "1988-01-05", member_relation: 0, member_gender: 0},
#     { member_name: "wif", member_birthday: "1990-06-05", member_relation: 1, member_gender: 1},
#     { member_name: "chi", member_birthday: "2018-05-05", member_relation: 2, member_gender: 0},
# ])

categories = Category.create([
  { id: 1,    category_name: "給与収入",              category_type: 0},
  { id: 2,    category_name: "事業収入",              category_type: 0},
  { id: 3,    category_name: "不動産収入",            category_type: 0},
  { id: 4,    category_name: "その他（定期収入）",    category_type: 0},
  { id: 5,    category_name: "その他（一時収入）",    category_type: 0},
  { id: 56,   category_name: "住宅費",                category_type: 1},
  { id: 57,   category_name: "教育費",                category_type: 1},
  { id: 58,   category_name: "夢プラン",              category_type: 1},
  { id: 59,   category_name: "生活費",                category_type: 1},
  { id: 60,   category_name: "その他（固定費）",      category_type: 1},
  { id: 61,   category_name: "その他（変動費）",      category_type: 1},
  { id: 62,   category_name: "その他（一時費用）",    category_type: 1}
])

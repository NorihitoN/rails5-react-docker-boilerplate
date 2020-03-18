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

subcaterogies = Subcategory.create([
  { id: 1,  subcategory_name: "給与収入",     category_id: 1},
  { id: 2,  subcategory_name: "事業収入",     category_id: 2},
  { id: 3,  subcategory_name: "不動産収入",   category_id: 3},
  { id: 4,  subcategory_name: "配当/利子",    category_id: 4},
  { id: 5,  subcategory_name: "その他",       category_id: 4},
  { id: 6,  subcategory_name: "資産売却",     category_id: 5},
  { id: 7,  subcategory_name: "その他",     category_id: 5},
  { id: 8,  subcategory_name: "賃貸",     category_id: 56},
  { id: 9,  subcategory_name: "住宅ローン",     category_id: 56},
  { id: 10,  subcategory_name: "管理費/修繕費",     category_id: 56},
  { id: 11,  subcategory_name: "リフォーム",     category_id: 56},
  { id: 12,  subcategory_name: "学費",     category_id: 57},
  { id: 13,  subcategory_name: "習い事",     category_id: 57},
  { id: 14,  subcategory_name: "お小遣い",     category_id: 57},
  { id: 15,  subcategory_name: "仕送り",     category_id: 57},
  { id: 16,  subcategory_name: "旅行",     category_id: 58},
  { id: 17,  subcategory_name: "留学",     category_id: 58},
  { id: 18,  subcategory_name: "食費",       category_id: 59},
  { id: 19,  subcategory_name: "光熱費",     category_id: 59},
  { id: 20,  subcategory_name: "通信費",     category_id: 59},
  { id: 21,  subcategory_name: "生活消耗品", category_id: 59},
  { id: 22,  subcategory_name: "美容院",     category_id: 59},
  { id: 23,  subcategory_name: "コンタクトレンズ",     category_id: 59},
  { id: 24,  subcategory_name: "化粧品",     category_id: 59},
  { id: 25,  subcategory_name: "書籍",     category_id: 59},
  { id: 26,  subcategory_name: "交通費",     category_id: 59},
  { id: 27,  subcategory_name: "その他（固定費）",     category_id: 60},
  { id: 28,  subcategory_name: "その他（変動費）",     category_id: 61},
  { id: 29,  subcategory_name: "その他（一時費用）",     category_id: 62}
])
class CreateMembers < ActiveRecord::Migration[5.1]
  def change
    create_table :members do |t|
      t.string :member_name, null: false
      t.integer :member_relation, null: false 
      t.date :member_birthday
      t.integer :member_gender
      t.references :family, foreign_key: true

      t.timestamps
    end
  end
end

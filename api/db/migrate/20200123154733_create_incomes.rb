class CreateIncomes < ActiveRecord::Migration[5.1]
  def change
    create_table :incomes do |t|
      t.integer :income_value
      t.integer :income_year
      t.integer :income_type
      t.text :income_memo
      t.references :member, foreign_key: true

      t.timestamps
    end
  end
end

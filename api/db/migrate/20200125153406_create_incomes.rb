class CreateIncomes < ActiveRecord::Migration[5.1]
  def change
    create_table :incomes do |t|
      t.integer :income_value
      t.references :category, foreign_key: true
      t.integer :income_year
      t.references :member, foreign_key: true
      t.references :subcategory, foreign_key: true
      t.references :event, foreign_key: true

      t.timestamps
    end
  end
end

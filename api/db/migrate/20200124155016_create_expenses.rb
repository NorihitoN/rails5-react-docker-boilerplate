class CreateExpenses < ActiveRecord::Migration[5.1]
  def change
    create_table :expenses do |t|
      t.integer :expense_value
      t.integer :expense_year
      t.integer :expense_type
      t.text :expense_memo
      t.references :member, foreign_key: true

      t.timestamps
    end
  end
end

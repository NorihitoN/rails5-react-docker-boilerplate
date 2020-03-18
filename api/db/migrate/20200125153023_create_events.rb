class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.integer :start_value
      t.integer :start_year
      t.integer :end_year
      t.references :member, foreign_key: true
      t.references :category, foreign_key: true
      t.references :subcategory, foreign_key: true
      t.integer :interval_year
      t.float :interest_rate
      t.string :event_memo

      t.timestamps
    end
  end
end

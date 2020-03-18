class CreateFamilies < ActiveRecord::Migration[5.1]
  def change
    create_table :families do |t|
      t.string :familyname
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end

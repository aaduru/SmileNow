class CreateBusinesses < ActiveRecord::Migration
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.string :street_address, null: false
      t.string :city_state_address, null: false
      t.integer :zipcode, null: false
      t.string :phone, null: false
      t.string :business_image_url, null: false

      t.timestamps null: false
    end
    add_index :businesses, :name, unique: true
  end
end

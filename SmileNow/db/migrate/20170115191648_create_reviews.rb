class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :business_id, null: false
      t.integer :user_id, null: false
      t.text :content, null: false
      t.float :rating, null: false

      t.timestamps null: false
    end
  end
end

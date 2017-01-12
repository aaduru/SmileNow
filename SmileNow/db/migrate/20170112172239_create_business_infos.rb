class CreateBusinessInfos < ActiveRecord::Migration
  def change
    create_table :business_infos do |t|
      t.integer :business_id, null:false
      t.string :accept_credit_card, null:false
      t.string :by_appointment_only, null:false, default: 'no'
      t.string :string, null:false, default: 'no'
      t.string :accept_insurance, null:false, default: 'no'

      t.timestamps null: false
    end
    add_index :business_infos, :business_id
  end
end

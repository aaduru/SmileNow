class AddDefaultValueToColumn < ActiveRecord::Migration
  def change
    remove_column :business_infos, :accept_credit_card
    add_column :business_infos, :accept_credit_card, :string, default: "no", null: false
  end
end

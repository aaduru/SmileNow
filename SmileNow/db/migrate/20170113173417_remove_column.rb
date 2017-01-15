class RemoveColumn < ActiveRecord::Migration
  def change
    remove_column :business_infos, :string
  end
end

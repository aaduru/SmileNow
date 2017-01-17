class Tagging < ActiveRecord::Base
  validates :tag_id, :business_id, presence: true

  belongs_to :business
  belongs_to :tag
end

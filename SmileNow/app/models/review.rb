class Review < ActiveRecord::Base
  validates :user_id, :business_id, :content, :rating, presence: true

  belongs_to :user

  belongs_to :business
end

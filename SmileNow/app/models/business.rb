class Business < ActiveRecord::Base
  validates :name, :description, :street_address, :city_state_address,
            :zipcode, :phone, :business_image_url, presence: true
  validates :name, uniqueness: true

  has_one :business_info
  has_many :reviews

  def average_rating
    reviews.average(:rating)
  end

  def count_rating
    reviews.count(:rating)
  end
end

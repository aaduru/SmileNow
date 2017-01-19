class Business < ActiveRecord::Base
  validates :name, :description, :street_address, :city_state_address,
            :zipcode, :phone, :business_image_url, :latitude,
            :longitude, presence: true
  validates :name, uniqueness: true

  has_one :business_info
  has_many :reviews
  has_many :taggings
  has_many :tags,
    through: :taggings,
    source: :tag

  def average_rating
    reviews.average(:rating).round(2)
  end

  def count_rating
    reviews.count(:rating)
  end

  def self.filter(tag_id)
    self.select('*')
        .joins(:taggings)
        .where('taggings.tag_id = ?', tag_id)
  end

  def self.in_bounds(bounds)
    self.where("latitude < ?", bounds[:northEast][:latitude])
       .where("latitude > ?", bounds[:southWest][:latitude])
       .where("longitude > ?", bounds[:southWest][:longitude])
       .where("longitude < ?", bounds[:northEast][:longitude])
  end
end

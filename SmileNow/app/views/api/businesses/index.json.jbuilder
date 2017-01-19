@businesses.each do |business|
  json.set! business.id do
    json.extract! business, :id, :name, :business_image_url, :street_address, :city_state_address, :zipcode, :phone, :average_rating, :count_rating
    json.tags do
      json.partial! 'api/tags/index', tags: business.tags
    end
    json.reviews do
      json.partial! 'api/reviews/index', reviews: business.reviews
    end
  end
end

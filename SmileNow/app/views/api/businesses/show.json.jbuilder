json.extract! @business, :id, :name, :description, :street_address, :city_state_address, :zipcode, :phone, :business_image_url, :business_info, :average_rating, :count_rating, :latitude, :longitude


json.reviews do
  json.partial! 'api/reviews/index', reviews: @business.reviews
end

json.tags do
  json.partial! 'api/tags/index', tags: @business.tags
end

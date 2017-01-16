json.extract! @business, :id, :name, :description, :street_address, :city_state_address, :zipcode, :phone, :business_image_url, :business_info


json.reviews do
  json.partial! 'api/reviews/review', collection: @business.reviews, as: :review
end

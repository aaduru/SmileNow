json.extract! @business, :id, :name, :description, :street_address,
  :city_state_address, :zipcode, :phone, :business_image_url,
  :business_info, :average_rating, :count_rating

  # json.reviews do
  #   json.partial! 'api/reviews/review', collection: business.reviews, as: :review
  # end

  json.reviews do
    json.partial! 'api/reviews/index', reviews: @business.reviews
  end

  json.tags do
    json.partial! 'api/tags/tag', tags: @business.tags
  end

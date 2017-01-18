@businesses.each do |business|
  json.set! business.id do
    json.extract! business, :id, :name, :business_image_url, :street_address, :city_state_address, :zipcode, :phone, :average_rating, :count_rating
    # business.tags.each do |tag|
    #   json.partial! 'api/tags/tag', tags: tag
    # end

  end
end

@businesses.each do |business|
  json.set! business.id do
    json.extract! business, :id, :name, :business_image_url, :street_address, :city_state_address, :zipcode, :phone, :average_rating, :count_rating
  end
end

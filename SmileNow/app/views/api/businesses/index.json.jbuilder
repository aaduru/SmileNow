@businesses.each do |clinic|
  json.set! clinic.id do
    json.extract! clinic, :id, :name, :business_image_url, :street_address, :city_state_address, :zipcode, :phone, :average_rating
  end
end

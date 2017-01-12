@business.each do |clinic|
  json.set! clinic.id do
    json.extract! clinic, :id, :name, :business_image_url
  end
end

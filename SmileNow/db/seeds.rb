# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: "ujwala", password: "123456")
User.create(username: "JohnDoe", password: "123456")
User.create(username: "JaneDoe", password: "123456")
User.create(username: "Ross", password: "123456")
User.create(username: "Miller", password: "123456")
User.create(username: "Kate", password: "123456")
User.create(username: "Tina", password: "123456")
User.create(username: "guest", password: "123456")


Business.create(name: "clinic1", description: "description", street_address: "160 spear st", city_state_address: "San Francisco, CA", zipcode: "94105", phone: "400-000-000", business_image_url: "http://res.cloudinary.com/dzmqqopi9/image/upload/v1484250995/clinic1_bai5kr.png")
Business.create(name: "clinic2", description: "description", street_address: "301b Mission St", city_state_address: "San Francisco, CA", zipcode: "94105", phone: "400-000-234", business_image_url: "http://res.cloudinary.com/dzmqqopi9/image/upload/v1484251468/clinic2_g9awb4.jpg")


BusinessInfo.create(business_id: 1, accept_credit_card: "yes", by_appointment_only: "yes")
BusinessInfo.create(business_id: 2, by_appointment_only: "yes")

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


Business.create(name: "Happy Smiles", description: "Complete family care clinic", street_address: "160 spear st", city_state_address: "San Francisco, CA", zipcode: "94105", phone: "415-989-600", business_image_url: "http://res.cloudinary.com/dzmqqopi9/image/upload/v1484330239/clinic1_ouv2ym.png")
Business.create(name: "Golden Gate Dental Care", description: "Pedrictic Dentist", street_address: "301b Mission St", city_state_address: "San Francisco, CA", zipcode: "94105", phone: "415-234-234", business_image_url: "http://res.cloudinary.com/dzmqqopi9/image/upload/v1484251468/clinic2_g9awb4.jpg")
Business.create(name: "Melissa Cosmetic Dental Care", description: "Dental care you can trust!", street_address: "301b Mission St", city_state_address: "San Francisco, CA", zipcode: "94105", phone: "415-980-234", business_image_url: "http://res.cloudinary.com/dzmqqopi9/image/upload/v1484327614/clinic3_m8vfwn.jpg")
Business.create(name: "Ocean Beach Dental", description: "description", street_address: "301b Mission St", city_state_address: "San Francisco, CA", zipcode: "94105", phone: "415-980-234", business_image_url: "http://res.cloudinary.com/dzmqqopi9/image/upload/v1484327618/clinic4_rmgxat.jpg")
Business.create(name: "Tooth Friendly", description: "description", street_address: "301b Mission St", city_state_address: "San Francisco, CA", zipcode: "94105", phone: "415-980-234", business_image_url: "http://res.cloudinary.com/dzmqqopi9/image/upload/v1484327622/clinic5_undemx.jpg")
Business.create(name: "Johnson Dental Care", description: "Complete family care clinic", street_address: "160 spear st", city_state_address: "San Francisco, CA", zipcode: "94105", phone: "415-989-600", business_image_url: "http://res.cloudinary.com/dzmqqopi9/image/upload/v1484327625/clinic6_xy3byh.jpg")
Business.create(name: "Downtown dental", description: "Pedrictic Dentist", street_address: "301b Mission St", city_state_address: "San Francisco, CA", zipcode: "94105", phone: "415-234-234", business_image_url: "http://res.cloudinary.com/dzmqqopi9/image/upload/v1484327628/clinic7_kjiwrn.jpg")
Business.create(name: "clinic8", description: "description", street_address: "301b Mission St", city_state_address: "San Francisco, CA", zipcode: "94105", phone: "415-980-234", business_image_url: "http://res.cloudinary.com/dzmqqopi9/image/upload/v1484327631/clinic8_am0h4j.jpg")
Business.create(name: "clinic9", description: "description", street_address: "301b Mission St", city_state_address: "San Francisco, CA", zipcode: "94105", phone: "415-980-234", business_image_url: "http://res.cloudinary.com/dzmqqopi9/image/upload/v1484328309/clinic9_mtnbi6.jpg")
Business.create(name: "clinic10", description: "description", street_address: "301b Mission St", city_state_address: "San Francisco, CA", zipcode: "94105", phone: "415-980-234", business_image_url: "http://res.cloudinary.com/dzmqqopi9/image/upload/v1484327637/clinic10_gxgr1k.jpg")


BusinessInfo.create(business_id: 1, accept_credit_card: "yes", by_appointment_only: "yes", accept_insurance: "yes")
BusinessInfo.create(business_id: 2, by_appointment_only: "yes")
BusinessInfo.create(business_id: 3, accept_credit_card: "yes", by_appointment_only: "yes", accept_insurance: "yes" )
BusinessInfo.create(business_id: 4, by_appointment_only: "yes", accept_insurance: "yes")
BusinessInfo.create(business_id: 5, accept_credit_card: "yes", by_appointment_only: "yes")
BusinessInfo.create(business_id: 6, by_appointment_only: "yes", accept_insurance: "yes")
BusinessInfo.create(business_id: 7, accept_credit_card: "yes", by_appointment_only: "yes", accept_insurance: "yes")
BusinessInfo.create(business_id: 8, by_appointment_only: "yes", accept_insurance: "yes")
BusinessInfo.create(business_id: 9, accept_credit_card: "yes", by_appointment_only: "yes", accept_insurance: "yes")
BusinessInfo.create(business_id: 10, by_appointment_only: "yes", accept_insurance: "yes")

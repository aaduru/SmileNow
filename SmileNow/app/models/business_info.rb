class BusinessInfo < ActiveRecord::Base
  validates :business_id, :accept_credit_card, :by_appointment_only,
      :accept_insurance, presence: true

  belongs_to :business
end

# json.extract! review, :id, :business_id, :user_id, :rating, :content, :user

json.extract! review, :id, :rating, :content, :business_id

json.user do
  json.username review.user.username
  json.id review.user.id
end

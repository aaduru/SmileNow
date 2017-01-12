# Database Schema Information

## users

 - has many `reviews`

column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
username          | string    | not null, indexed, unique
password_digest   | string    | not null
session_token     | string    | not null, indexed, unique
profile_image     | string    |
---------------------------------------------------------
## businesses

  - has many `reviews`
  - has many `ratings` through `reviews`
  - has many `tags` through `taggings`
  <!-- - has many `doctors` -->

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null, indexed, unique
description     | string    | not null, indexed, unique
image_url       | string    |
<!-- no_of_doctors   | integer   | not null -->
address         | string    | not null
--------------------------------------------------------


## business-info

column name         | data type | details
--------------------|-----------|-----------------------
id                  | integer   | not null, primary key
business_id         | integer   | not null, foreign_key, indexed
accept_credit_cards | string    | not null, default value no
by_appointment_only | string    | not null, default value no
accept_insurance    | string    | not null, default value no
--------------------------------------------------------

<!-- ## business_hours  

column name         | data type | details
--------------------|-----------|-----------------------
id                  | integer   | not null, primary key
business_id         | integer   | not null, foreign_key, indexed
start_time          | string    | not null
end_time            | string    | not null
open/closed         | string    | not null, default value closed
-------------------------------------------------------- -->
<!-- ## doctors

  - belong to `business`

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null, indexed, unique
description     | string    | not null, indexed, unique
image_url       | string    |
speciality      | string    | not null
--------------------------------------------------------- -->

## reviews

 - belongs_to `user`
 - belongs_to `business`

 column name     | data type | details
 ----------------|-----------|-----------------------
 id              | integer   | not null, primary key
 business_id     | integer   | not null, foreign_key, indexed
 user_id         | integer   | not null, foreign_key, indexed
 content         | text      | not null
 rating          | integer   | not null
---------------------------------------------------------

 ## tags // type of clinic

 - has_many `businesses` through `taggings`

column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

---------------------------------------------------------

## taggings

 - belongs_to `tag`
 - belongs_to `business`

column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
business_id | integer   | not null, foreign key (references businesses), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed

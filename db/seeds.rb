# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

10.times do
  Band.create(
    band_name: "#{Faker::Book.title}",
    hometown: "#{Faker::Address.city}",
    genre: "#{Faker::Book.genre}",
    year_formed: "2007",
    bio: "#{Faker::Hipster.paragraph}",
    record_label: "#{Faker::Book.publisher}",
    bandcamp_url: "#{Faker::Internet.url}",
    facebook_url: "#{Faker::Internet.url}",
    band_email: "#{Faker::Internet.email}",
    band_booking_agent: "#{Faker::Internet.email}",
    band_photo_url: "#{Faker::Avatar.image}",
    user_id: 1
  )
end

500.times do
  Show.create(
  date: Date.today,
  city: "San Francisco",
  venue: "Bottom of the Hill",
  address: "1220 16th st",
  zip: "92547",
  state: "CA",
  band_id: "#{Faker::Number.between(1, 30)}",
  user_id: 1,
  details: "This is a show at a place at a time!"
  )
end

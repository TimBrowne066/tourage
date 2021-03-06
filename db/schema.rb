# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170919141809) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bands", force: :cascade do |t|
    t.string "band_name", null: false
    t.string "hometown", null: false
    t.string "genre", null: false
    t.string "year_formed", null: false
    t.string "bio", null: false
    t.string "record_label"
    t.string "bandcamp_url"
    t.string "facebook_url"
    t.string "band_email"
    t.string "band_booking_agent"
    t.string "band_photo_url"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "shows", force: :cascade do |t|
    t.string "city", null: false
    t.string "state", null: false
    t.string "zip", null: false
    t.string "address", null: false
    t.string "venue", null: false
    t.date "date", null: false
    t.integer "band_id", null: false
    t.integer "user_id", null: false
    t.string "event_link"
    t.string "tickets_link"
    t.text "details"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "provider"
    t.string "uid"
    t.string "name"
    t.string "oauth_token"
    t.datetime "oath_expires_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end

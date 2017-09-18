class CreateBands < ActiveRecord::Migration[5.1]
  def change
    create_table :bands do |t|
      t.string :band_name, null: false
      t.string :hometown, null: false
      t.string :genre, null: false
      t.string :year_formed, null: false
      t.string :bio, null: false
      t.string :record_label
      t.string :bandcamp_url
      t.string :facebook_url
      t.string :band_email
      t.string :band_booking_agent
      t.string :band_photo_url
      t.timestamps
    end
  end
end

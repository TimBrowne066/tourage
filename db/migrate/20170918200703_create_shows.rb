class CreateShows < ActiveRecord::Migration[5.1]
  def change
    create_table :shows do |t|
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip, null: false
      t.string :address, null: false
      t.string :venue, null: false
      t.datetime :date, null: false
      t.integer :band_id, null: false
      t.integer :user_id, null: false
      t.string :event_link
      t.string :tickets_link
      t.text :details

      t.timestamps
    end
  end
end

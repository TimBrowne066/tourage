class Show < ApplicationRecord
  belongs_to :band

  validates :city, presence: true
  validates :state, presence: true
  validates :zip, presence: true
  validates :address, presence: true
  validates :venue, presence: true
  validates :date, presence: true
  validates :band_id, presence: true

end

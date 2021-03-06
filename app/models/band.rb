class Band < ApplicationRecord
  has_many :shows
  belongs_to :user


  validates :band_name, presence: true
  validates :hometown, presence: true
  validates :genre, presence: true
  validates :year_formed, presence: true
  validates :bio, presence: true
end

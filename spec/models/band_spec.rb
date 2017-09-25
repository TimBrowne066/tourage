require 'rails_helper'

RSpec.describe Band, type: :model do
  it { should have_valid(:band_name).when('Slayer') }
  it { should_not have_valid(:band_name).when(nil) }

  it { should have_valid(:hometown).when('Los Angeles, California') }
  it { should_not have_valid(:hometown).when(nil) }

  it { should have_valid(:genre).when('Metal') }
  it { should_not have_valid(:genre).when(nil) }

  it { should have_valid(:year_formed).when('1986') }
  it { should_not have_valid(:year_formed).when(nil) }

  it { should have_valid(:bio).when('Slayer is one of the big four of thrash metal.') }
  it { should_not have_valid(:bio).when(nil) }

  it { should have_valid(:band_name).when('Slayer') }
  it { should_not have_valid(:band_name).when(nil) }
end

require 'rails_helper'

RSpec.describe Show, type: :model do
  it { should have_valid(:city).when('Portland') }
  it { should_not have_valid(:city).when(nil) }

  it { should have_valid(:state).when('Oregon') }
  it { should_not have_valid(:state).when(nil) }

  it { should have_valid(:zip).when('66459') }
  it { should_not have_valid(:zip).when(nil) }

  it { should have_valid(:address).when('1445 Couch St.') }
  it { should_not have_valid(:address).when(nil) }

  it { should have_valid(:venue).when('Slabtown') }
  it { should_not have_valid(:venue).when(nil) }

  it { should have_valid(:date).when(Date.parse('03/01/2015')) }
  it { should_not have_valid(:date).when(nil) }
end

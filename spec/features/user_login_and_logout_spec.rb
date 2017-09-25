require 'rails_helper'

RSpec.feature "user logs in and out" do
  scenario "using google oauth2" do
    stub_omniauth
    visit root_path
    expect(page).to have_link("Sign in with Google")
    click_link "Sign in with Google"
    expect(page).to have_content("Tim Browne")
    expect(page).to have_link("Sign out")
    click_link("Sign out")
    expect(page).to have_link("Sign in with Google")
  end
end

# README

TOURAGE is an application for independent touring musicians, managers, and booking agents to simplify and centralize their tour date information.

https://tourageapp.herokuapp.com

Versions:
Ruby version 2.4.0
Rails version 5.1.4

Dependencies:
react-on-rails 9.0.2

Setup:
1. bundle install
2. yarn install
3. foreman start -f Procfile.dev
4. rake db:create
5. rake db:migrate


Testing:
TOURAGE uses a combination of Rspec, Capybara, Phantomjs, Poltergeist, Figaro, and Selenium-webdriver.
Run the test suite after bundling and yarn installing with the rspec or rake command.


Deployment:
The application is configured for easy deployment to Heroku, so long as all gem and node dependencies are installed.

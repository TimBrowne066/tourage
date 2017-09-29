OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, ENV["OAUTH_LOGIN"], ENV["OAUTH_SECRET"], skip_jwt: true 
end

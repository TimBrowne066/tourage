class BandsController < ApplicationController
  def index
    @bands = Band.all
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def show
    @band = Band.find(params[:id])
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def new
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
    @band = Band.new
  end

  def create
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
    @band = Band.create(band_params)
    @band.user = @current_user

    respond_to do |format|
      if @band.save
        format.json { render json: @band }
        format.html { redirect_to bands_route, notice: "Band added successfully!"}
      else
        format.json {render json: @band.errors.full_messages.join(', ') }
        format.html { render :new, flash[:alert] = @band.errors.full_messages.join(' , ') }
      end
    end
  end

  private

  def band_params
    params.require(:band).permit(:band_name, :hometown, :genre, :year_formed, :bio, :record_label, :bandcamp_url, :facebook_url, :band_email, :band_booking_agent, :band_photo_url)
  end
end

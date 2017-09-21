class ShowsController < ApplicationController

  def index
    @shows = Show.where(band_id: params[:id])
  end

  def new

    @current_user ||= User.find(session[:user_id]) if session[:user_id]
    @band = Band.find(params[:band_id])
    @show = Show.new
  end

  def create
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
    @band = Band.find(params[:band_id])
    @show = Show.create(show_params)
    @show.band = @band
    @show.user = @current_user

    respond_to do |format|
      if @show.save
        format.json { render json: @show }
        format.html { redirect_to @band, notice: "Show added successfully" }
      else
        format.json { render json: @show.errors.full_messages.join(' , ') }
        format.html { render :new, flash[:alert] = @show.errors.full_messages.join(' , ') }
      end
    end
  end

  private

  def show_params
    params.require(:show).permit(:city, :state, :zip, :address, :venue, :date, :event_link, :tickets_link, :details, :band_id, :user_id)
  end
end

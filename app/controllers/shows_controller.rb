class ShowsController < ApplicationController
  def index
    @shows = Show.where(band_id: params[:id])
  end

  def show
  end
end

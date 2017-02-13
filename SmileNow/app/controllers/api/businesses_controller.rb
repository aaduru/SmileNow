class Api::BusinessesController < ApplicationController
  def index
    # @businesses = Business.all

    query_filter_id = params[:filterId]
    query = params[:search]

    if params[:search] && params[:filterId]
      @businesses = Business.where("name ILIKE ?", "%#{query}%")
                            .includes(:taggings, :reviews)
                            .where("taggings.tag_id = ?", query_filter_id)
                            .references(:tags)
      # if @businesses.empty?
      #   render json: ["no records exist for the search query %#{query}% and filter id %#{query_filter_id}"], status: :unprocessable_entity
      # end

    elsif params[:filterId]

      @businesses = Business.includes(:taggings, :reviews)
                    .where("taggings.tag_id = ?", query_filter_id)
                    .references(:tags)
    elsif params[:search]
      @businesses = Business.where("name ILIKE ?", "%#{query}%")
      # if @businesses.empty?
      #   debugger
      #   render json: ["no records exist for the search query %#{query}% "], status: :unprocessable_entity
      # end
    else
      @businesses = Business.all.includes(:taggings, :reviews)
    end

    # if params[:filterId]
    #
    #   @businesses = Business.joins(:taggings)
    #                         .where("taggings.tag_id = ?", query_filter_id)
    #                         # .includes(:reviews)
    #
    # else
    #   @businesses = Business.all
    # end
    render "api/businesses/index"
  end

  def show
    @business = Business.includes(:reviews).find(params[:id])
    render "api/businesses/show"
  end

  private

  def business_params
    params.require(:business).permit(:name, :description, :street_address,
                                     :city_state_address, :zipcode,
                                     :phone, :business_image_url,
                                     :business_info, :latitude, :longitude)
  end

  def bounds
    params[:bounds]
  end
end

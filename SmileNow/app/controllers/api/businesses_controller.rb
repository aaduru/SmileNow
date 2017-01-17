class Api::BusinessesController < ApplicationController
  def index
    @businesses = Business.all
    # query = params[:search]
    # query_filter_id = params[:filterId]
    #
    # if query_filter_id == "0"
    #   @businesses = Business.where("name LIKE ?", "%#{query}%")
    # else
    #   @businesses = Business.where("name LIKE ?", "%#{query}%")
    #                         .joins(:taggings)
    #                         .where("taggings.tag_id = ?", query_filter_id)
    #
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
                                     :business_info)
  end
end

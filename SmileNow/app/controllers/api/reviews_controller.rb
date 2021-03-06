class Api::ReviewsController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def create
    @review = Review.new(review_params)
    @review.user = current_user
    if @review.save
      render :show
    else
      render json: ["please enter a review"], status: :unprocessable_entity
    end
  end

  private

  def review_params
    params.require(:review).permit(:rating, :content, :business_id)
  end
end

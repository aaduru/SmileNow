class Api::ReviewsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  def index
    business_id = params[:business_id]
    @reviews = Review.where("business_id = ?", business_id)
  end

  def show
    @reviews = Review.where("business_id = ?", params[:id])
  end

  def create
    @review = Review.new(review_params)

    if @review.save
      render :show
    else
      render json: @review, status: :unprocessable_entity
    end
  end

  def update
    @review = Review.find_by_id(params[:id])
    if @review.update_attributes(review_params)
      render :show
    else
      @errors = @review.errors
      render json: @errors, status: 422
    end
  end

  def destroy
    @review = Review.find_by(id: params[:id])
    if @review.destroy
      @reviews = Review.where("business_id = ?", params[:id])
      render json: [params[:id]]
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  private

  def review_params
    params.require(:review).permit(:rating, :context, :business_id)
  end
end

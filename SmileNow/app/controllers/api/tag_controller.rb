class Api::TagController < ApplicationController
  def index
    @tags = Tag.all
  end
end

class TagsController < ApplicationController
    before_action :authorized, only: [:create, :destroy]

    def index
        render json: Tag.all
    end

    def show
        @tag = Tag.find(params[:id])
        render json: @tag
    end

    def create
        @tag = Tag.create!(tags_params)
        render json: @tag
    end

    def destroy
        @tag = Tag.find(params[:id])
        @tag.destroy
        head :no_content
    end

    private

    def tags_params
        params.permit(:name, :meal_id)
    end

end

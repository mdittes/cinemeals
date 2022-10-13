class MealsController < ApplicationController
    before_action :authorized, only: [:create, :update, :destroy]

    def index 
        @meals = Meal.all 
        render json: @meals
    end

    def show 
        @meal = Meal.find(params[:id])
        render json: @meal
    end

    def create 
        @meal = Meal.create!(meals_params)
        render json: @meal, status: :created
    end

    def update
        @meal = Meal.find(params[:id])
        @meal.update!(meal_params)
        render json: @meal
    end

    def destroy
        @meal = Meal.find(params[:id])
        @meal.destroy 
        head :no_content
    end

    private

    def meals_params 
        params.permit(:name, :course, :image, :notes, :movie_id, :user_id)
    end

end

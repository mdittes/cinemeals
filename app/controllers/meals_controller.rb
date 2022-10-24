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
        @movie = Movie.create!(movie_params)
        debugger
        @meal = Meal.create!(meals_params, movie_id: @movie.id)
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

    def movie_params 
        params.permit(:title, :genre, :poster)
    end

end

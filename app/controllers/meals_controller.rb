class MealsController < ApplicationController
    before_action :authorized, only: [:create, :update, :destroy]

    def index 
        @meals = Meal.all 
        render json: @meals.alphabetical
    end

    def by_course 
        @meals = Meal.all
        render json: @meals.meal_by_course
    end

    def show 
        @meal = Meal.find(params[:id])
        render json: @meal
    end

    def create 
        @movie = Movie.create!(movie_params)
        @meal = Meal.create!(
            name: params[:name],
            course: params[:course],
            image: params[:image],
            notes: params[:notes],
            movie_id: @movie.id,
            user_id: @current_user.id
        )
        render json: @meal, status: :created
    end

    def update
        @meal = Meal.find(params[:id])
        @meal.update!(meals_params)
        render json: @meal
    end

    def destroy
        @meal = Meal.find(params[:id])
        @meal.destroy 
        head :no_content
    end

    private

    def movie_params 
        params.permit(:title, :genre, :poster)
    end

    def meals_params 
        params.permit(:name, :course, :image, :notes, :movie_id, :user_id)
    end

end

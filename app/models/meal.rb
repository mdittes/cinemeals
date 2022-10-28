class Meal < ApplicationRecord
    belongs_to :user
    belongs_to :movie
    has_many :tags, dependent: :destroy

    def self.alphabetical
        self.order(:name)
    end

    def self.meal_by_course(course)
        self.where(course: course)
    end

    # def meal_by_genre(genre)
    #     meals = []
    #     movies = Movie.where(genre: genre)
    #     movies.map do |movie|
    #         movie.meals.map |meal|
    #         meals.push(meal)
    #     end
    #     meals
    # end

end

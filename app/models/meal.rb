class Meal < ApplicationRecord
    belongs_to :user
    belongs_to :movie
    has_many :tags, dependent: :destroy

    def self.alphabetical
        self.order(:name)
    end
    
    # def alphabetical_by_film
    #     self.movie.map do ||
            
        # self.includes(:movie).order[:title]
        # self.movie.order[:title]
        # meals = meals.sort_by{|meal| [meal['movie'], meal['title']]}
        # meals
        # meal.sort_by { |x| x[:movie][:title]}
    # end

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

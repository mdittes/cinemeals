class Meal < ApplicationRecord
    belongs_to :user
    belongs_to :movie
    has_many :tags, dependent: :destroy

    # def alphabetical_by_film
    #     self.movie.map do ||
            
        # self.includes(:movie).order[:title]
        # self.movie.order[:title]
        # meals = meals.sort_by{|meal| [meal['movie'], meal['title']]}
        # meals
        # meal.sort_by { |x| x[:movie][:title]}
    # end

    # def meal_by_genre 
    #     self.all.map do |movie|
    #         movie.genre
    #     end
    # end

    # def self.meal_by_course 
    #     self.where(course: ["Entree"]
    # end

    def self.meal_by_course(course)
        self.where(course: course)
    end

    # def self.meal_by_genre(genre)
    #     self.movie.where(genre: genre)
    # end

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

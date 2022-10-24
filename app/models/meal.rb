class Meal < ApplicationRecord
    belongs_to :user
    belongs_to :movie
    has_many :tags, dependent: :destroy

    def alphabetical_by_film
        self.includes(:movie).order[:title]
        # self.movie.order[:title]
        # meals = meals.sort_by{|meal| [meal['movie'], meal['title']]}
        # meals
        # meal.sort_by { |x| x[:movie][:title]}
    end

end

class Movie < ApplicationRecord
    has_many :meals
    has_many :users, through: :meals

    # def self.alphabetical_by_film 
    #     self.order(:title)
    # end

    # def by_genre 
    #     self.all.genre
    # end

end

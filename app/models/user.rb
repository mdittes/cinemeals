class User < ApplicationRecord
    has_many :meals
    has_many :movies, through: :meals

    has_secure_password
    validates :username, presence: true, uniqueness: true

    def user_meals 
        self.meals.map do |meal|
            meal
        end
    end 

end

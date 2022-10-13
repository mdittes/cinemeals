class User < ApplicationRecord
    has_many :meals
    has_many :movies, through: :meals

    has_secure_password
end

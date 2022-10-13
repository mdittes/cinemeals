class MealSerializer < ActiveModel::Serializer
  attributes :id, :name, :course, :image, :notes, :movie_id, :user_id
  has_one :movie
  has_one :user, only: [:username]
  has_many :tags
end

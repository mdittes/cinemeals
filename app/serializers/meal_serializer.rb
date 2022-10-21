class MealSerializer < ActiveModel::Serializer
  attributes :id, :name, :course, :image, :notes, :movie_id, :user_id
  belongs_to :movie
  belongs_to :user, only: [:username]
  has_many :tags
end

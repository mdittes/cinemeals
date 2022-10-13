class MealSerializer < ActiveModel::Serializer
  attributes :id, :name, :course, :image, :notes, :movie_id, :user_id
end

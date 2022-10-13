class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :poster, :genre
  has_many :meals
end

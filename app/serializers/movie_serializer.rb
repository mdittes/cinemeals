class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :poster, :genre
end

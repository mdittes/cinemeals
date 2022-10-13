class TagSerializer < ActiveModel::Serializer
  attributes :id, :name, :meal_id
  has_one :meal
end

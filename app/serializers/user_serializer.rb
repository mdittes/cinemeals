class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :image, :email, :password_digest
  has_many :meals
end

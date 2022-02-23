class DogSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image, :poops
end

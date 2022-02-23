class PoopSerializer < ActiveModel::Serializer
  attributes :id, :pooped_at, :description, :dog
end

class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :full_name, :role, :password_digest
end

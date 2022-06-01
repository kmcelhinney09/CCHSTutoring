class User < ApplicationRecord
  has_secure_password
  enum role: [:tutee, :tutor, :admin]

  after_initialize do
    if self.new_record?
      self.role ||= :tutee
    end
  end

  validates :email, :password, :full_name, :password_confirmation, presence: true
  validates :email, uniqueness: true, on: :create
  validates :password, length: {minimum:8}
  validates :password, confirmation: true

  # password validation written chowderhead taken from https://dev.to/nodefiend/rails-password-validation-29kj
  validate :password_lower_case
  validate :password_uppercase
  validate :password_special_char
  validate :password_contains_number

  def password_uppercase
    return if !!password.match(/\p{Upper}/)
    errors.add :password, ' must contain at least 1 uppercase '
  end

  def password_lower_case
    return if !!password.match(/\p{Lower}/)
    errors.add :password, ' must contain at least 1 lowercase '
  end

  def password_special_char
    special = "?<>',?[]}{=-)(*&^%$#`~{}!"
    regex = /[#{special.gsub(/./){|char| "\\#{char}"}}]/
    return if password =~ regex
    errors.add :password, ' must contain special character'
  end

  def password_contains_number
    return if password.count("0-9") > 0
    errors.add :password, ' must contain at least one number'
  end
end

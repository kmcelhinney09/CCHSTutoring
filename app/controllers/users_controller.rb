class UsersController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  skip_before_action :authorized, only: [:create]

  def create
    user = User.create!(user_params)
    render json: user
  end

def show
  current_user = User.find(session[:user_id])
  puts "The Current USer"
  puts current_user
  render json: current_user
end
  private

  def render_unprocessable_entity(invalid)
    render json:{error: invalid.record.errors}, status: :unprocessable_entity
  end

  def user_params
    params.permit(:email, :password, :password_confirmation, :full_name, :role)
  end
end

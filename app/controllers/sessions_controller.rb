class SessionsController < ApplicationController
  skip_before_action :authorized, only: :create
  
  def create
    user = User.find_by(email: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json:user, status: :created
    else
      render json: {error: {login: "Invalid Email or Password"}}, status: :unauthorized
    end
  end
end

class SessionsController < ApplicationController
  skip_before_action :authorized, only: :create
  def create
    user = User.find_by(email: params[:email])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json:user, status: :created
    else
      render json: {error: {login: "Invalid Email or Password"}}, status: :unauthorized
    end
  end

  def destroy
    user = User.find_by(id:session[:user_id])
    if user
      session.delete :user_id
      session.delete :full_name
      head :no_content
    else
      render json: {errors: ["Not Autherized"]}, status: :unauthorized
    end
  end
end

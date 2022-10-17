class UsersController < ApplicationController
    before_action :authorized, only: [:show]

    #for '/signup':
    def create 
        @user = User.create!(user_params)
        token = encode_token({user_id: @user.id})
        render json: {user: @user, token: token}
    end

    #for '/profile':
    def show 
        render json: @current_user
    end

    #for '/login':
    def login 
        @user = User.find_by(username: params[:username])
        if @user && @user.authenticate(params[:password])
            token = encode_token({user_id: @user.id})
            render json: {user: @user, token: token}
        end
    end

    #for '/logout':
    def logout 
        @current_user = nil 
        head :no_content
    end

    private

    def user_params
        params.permit(:username, :password, :email, :image)
    end

end

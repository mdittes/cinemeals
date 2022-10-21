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

    #for '/users/:id':
    def update
        user = User.find_by(id: params[:id])
        if user
            user.update!(user_params)
            render json: user
        else
            render json: {error: "User not found"}, status: :not_found
        end
        # token = request.headers['token']
        # payload = decode_token(token)[0]
        # if payload
        #     user = User.find_by(id: params[:id])
        #     user.update!(user_params)
        #     if user.save
        #         render json: user
        #     else
        #         render json: user.errors 
        #     end
        # else
        #     render json: {error: "User not found"}, status: :not_found
        # end
    end

    private

    def user_params
        params.permit(:username, :password, :email, :image)
    end

end

class UsersController < ApplicationController
    before_action :authorized, only: [:show, :update]

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

    #for '/users/:id/cinemeals':
    def users_meals
        @user = User.find(params[:id])
        render json: @user.user_meals
    end

    #for '/users/:id':
    def update
        user = User.find_by(id: params[:id])
        if user
            user.update!(user_params)
            render json: user
        # if user
        #     user_params.each do |cur_param|
        #         if params[cur_param] != ''
        #             user.update!(cur_param: params[cur_param])
        #         end
        #     render json: user
        # end
        else
            render json: {error: "User not found"}, status: :not_found
        end
    end

    private

    def user_params
        params.permit(:username, :password, :email, :image)
    end

end

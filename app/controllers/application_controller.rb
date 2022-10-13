class ApplicationController < ActionController::API
    #rescue_from User::NotAuthorized, with: :deny_access 
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_response
    #before_action :authorized 

    def logged_in_user 
        headers = request.headers['Authorization']
        if(headers)
            token = headers.split(' ')[1]
            cur_id = JWT.decode(token, 'secret', true, algorithm: 'HS256')
            @current_user = User.find_by(id: cur_id[0]["user_id"])
            @current_user
        end
    end

    def authorized
        puts "checking... #{logged_in_user}"
        render json: {message: "Please log in"}, status: :unauthorized unless !!logged_in_user
    end

    private 

    def deny_access
        head :forbidden
    end

    def not_found_response
        render json: {error: "Not found"}, status: 404
    end

    def invalid_response(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end

end

class ApplicationController < ActionController::API
    #rescue_from User::NotAuthorized, with: :deny_access 
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_response
    before_action :authorized 
    # skip_before_action :verify_authenticity_token

    def auth_header 
        request.headers['token']
    end

    def encode_token(payload)
        JWT.encode(payload, 'secret')
    end

    def decoded_token
        if auth_header
            token = auth_header
             puts "decoded token", token

            begin 
                JWT.decode(token, 'secret', true, algorithm: 'HS256')
            rescue JWT::DecodeError
                nil
            end
        end
    end

    def logged_in_user 
        if decoded_token
            user_id = decoded_token[0]['user_id']
            puts "hello", user_id
            @current_user = User.find_by(id: user_id)
            @current_user
        end
    end

    def logged_in?
        !!logged_in_user
    end

    def authorized
        # puts "checking... #{logged_in_user}"
        render json: {message: "Please log in"}, status: :unauthorized unless logged_in?
    end

    private 

    def deny_access
        head :forbidden
    end

    def not_found_response
        render json: {error: "Not found"}, status: 404
    end

    def invalid_response(exception)
        redirect_back_or_to root_url, alert: exception.record.errors.full_messages.to_sentence
    end

end

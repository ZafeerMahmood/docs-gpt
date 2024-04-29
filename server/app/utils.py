from functools import wraps
import jwt
from app.config import Config
from flask import jsonify
from flask import request

def verify_token(token):
    try:
        decoded_data = jwt.decode(jwt=token,key=Config.SUPABASE_JWT, algorithms=["HS256"],options={"verify_aud": False})
        return decoded_data
    except Exception as e:
        print(e)
        return None
    
def check_jwt(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        authorization_header = request.headers.get('Authorization')
        if not authorization_header:
            return jsonify({'message': 'Authorization token is missing'}), 401
        parts = authorization_header.split()
        if len(parts) != 2 or parts[0].lower() != 'bearer':
            return jsonify({'message': 'Invalid token format'}), 401
        token = parts[1]
        validated_data = verify_token(token)
        kwargs['validated_data'] = validated_data
        if not validated_data:
            return jsonify({'message': 'Invalid token'}), 401

        return f(*args, **kwargs)
    return decorated_function


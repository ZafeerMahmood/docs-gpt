from app import app
from flask import jsonify
from app.config import Config
from app.utils import check_jwt

API_VERSION = Config.API_VERSION

@app.route(f'/', methods=['GET'])
def hello():
    return jsonify({
        "server": 'running',
        "version": '1.0.0'
    }), 200


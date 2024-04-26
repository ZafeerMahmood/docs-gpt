from app import app
from flask import jsonify
from app.config import Config
from app.utils import check_jwt

API_VERSION = Config.API_VERSION

@app.route(f'/', methods=['GET'])
def hello():
    db='connected'
    llm='connected'
    return jsonify({
        "server": 'running',
        "version": '1.0.0',
        "message": "Hello World!",
        "db": db,
        "llm": llm
    }), 200

@app.route(f'{API_VERSION}/upload', methods=['POST'])
@check_jwt
def upload():
    # TODO: Implement file upload
    # file will be a pdf parse the pdf into text
    # save the text into a database
    # make a query of text to send to local language model

    return jsonify({
        "message": 'File uploaded successfully'
    }), 200

@app.route(f'{API_VERSION}/files', methods=['GET'])
@check_jwt
def get_files():
    # TODO: Implement file upload
    # files from db and return them.
    return jsonify({
        "message": 'Files retrieved successfully'
    }), 200


# Protected route
# a route to return a respons form llm based on the request
@app.route(f'{API_VERSION}/llm', methods=['GET'])
@check_jwt
def llm():
    # TODO: Implement file upload

    ## pass the question to the llm and return the response
    ## make a regx function to hide sensitive information.
    return jsonify({
        "message": 'llm'
    }), 200


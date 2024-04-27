from app import app
from flask import jsonify, request
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


# TODO: Implement file upload
# file will be a pdf parse the pdf into text
# save the text into a database
# make a query of text to send to local language model
@app.route(f'{API_VERSION}/upload', methods=['POST'])
@check_jwt
def upload():
    if 'file' not in request.files:
        return jsonify({"error": 'No file part'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": 'No selected file'}), 400

    # You might want to add code here to save the file or process it.

    return jsonify({
        "message": 'File uploaded successfully'
    }), 200

@app.route(f'{API_VERSION}/files', methods=['GET'])
@check_jwt
def get_files():
    try:
    # TODO: Implement file upload
    # files from db and return them.
        return jsonify({
            "message": 'Files retrieved successfully'
        }), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


# TODO: Implement file upload

## pass the question to the llm and return the response
## make a regex function to hide sensitive information.
@app.route(f'{API_VERSION}/chat', methods=['POST'])
# @check_jwt
def llm():
    try:
        data = request.json
        message = data.get('message')
        return jsonify({
            "message": 'llm response'+ ' '+ message
        }), 200
    except Exception as e:
        print(e)
        return jsonify({"error": str(e)}), 500



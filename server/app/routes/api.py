from app import app
from flask import jsonify, request
from app.config import Config
from app.utils import check_jwt
import os
from app.services.llm import llm_process_text

API_VERSION = Config.API_VERSION
PARSER = app.parser

app.config['UPLOAD_FOLDER'] = os.path.join(os.getcwd(), 'uploads')

@app.route(f'/', methods=['GET'])
def hello():
    return jsonify({ 
        "server": 'running',
        "version": '1.0.0',
        "message": "Hello World!",
        "db":'connected',
        "llm": 'connected',
        "parser": 'connected'
    }), 200


# TODO: Implement file upload
# file will be a pdf parse the pdf into text
# save the text into a database
# make a query of text to send to local language model
# return the context of the local language model.
@app.route(f'{API_VERSION}/upload', methods=['POST'])
@check_jwt
def upload():
    try:
        if "file" not in request.files:
            return jsonify({"error": 'No file part'}), 400
        file = request.files['file']
        if file.filename == '':
            return jsonify({"error": 'No selected file'}), 400
        if file:
            file_path = os.path.join(app.config["UPLOAD_FOLDER"], file.filename)
            file.save(file_path)

            documents = PARSER.load_data(file_path)
            os.remove(file_path)
            print(documents[0].text)
            if documents[0].text:
                return jsonify({
                    "context": [{
                        "role": "user",
                        "content": documents[0].text
                    },{
                        "role":"user", 
                        "content":"when ever you answer a question please convert my social security number to a secure format."
                    }] ,
                    "message": "File uploaded successfully please ask any question"
                }), 200
            else:
                return jsonify({
                    "message": 'No text found in document'
                }), 400
    except Exception as e:
        print(e)
        return jsonify({"error": str(e)}), 500

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


@app.route(f'{API_VERSION}/chat', methods=['POST'])
@check_jwt
def llm():
    try:
        data = request.json
        message = data.get('message')
        context=data.get('context')

        if message is None:
            return jsonify({"error": 'No message found'}), 400
        
        response = llm_process_text(message, "llama-7b-chat",context)
        res=response.json()
        answer=res['choices'][0]['message']['content']
        if answer:
            return jsonify({
                "message": answer,
            }), 200
        return jsonify({
            "message": "Oops! I couldn't find any answer",
        }), 200
    except Exception as e:
        print(e)
        return jsonify({"error": str(e)}), 500



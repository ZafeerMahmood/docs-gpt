from app import app
from flask import jsonify, request
from app.config import Config
from app.utils import check_jwt
import os
from app.services.llm import llm_process_text, get_context
from app.services.db import  DB

API_VERSION = Config.API_VERSION
PARSER = app.parser
app.config['UPLOAD_FOLDER'] = os.path.join(os.getcwd(), 'uploads')
db=DB()

#* done
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

#* done
@app.route(f'{API_VERSION}/upload', methods=['POST'])
@check_jwt
def upload(validated_data=None):
    try:
        user_id=validated_data['sub']
        if "file" not in request.files:
            return jsonify({"error": 'No file part'}), 400
        file = request.files['file']
        if file.filename == '':
            return jsonify({"error": 'No selected file'}), 400
        if file:
            file_path = os.path.join(app.config["UPLOAD_FOLDER"], file.filename)
            file.save(file_path)

            documents = PARSER.load_data(file_path)
            db.upload_pdf(file_path, user_id, file.filename)
            
            os.remove(file_path)

            if documents[0].text:
                db.add_profile(user_id,file.filename,documents[0].text)
                context=get_context(documents[0].text)
                return jsonify({
                    "context":context,
                    "message": "File uploaded successfully please ask any question"
                }), 200
            else:
                return jsonify({
                    "message": 'No text found in document'
                }), 400
    except Exception as e:
        print(e)
        return jsonify({"error": str(e)}), 500

#* done
@app.route(f'{API_VERSION}/files', methods=['GET'])
@check_jwt
def get_files(validated_data=None):
    try:
        db_data=db.get_files(validated_data['sub'])
        return jsonify({
            "data": db_data,
            "message": 'Files retrieved successfully'
        }), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

#* done
@app.route(f'{API_VERSION}/chat', methods=['POST'])
@check_jwt
def llm(validated_data=None):
    try:
        print(validated_data)
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

#*done
@app.route(f'{API_VERSION}/download/<file_id>', methods=['GET'])
@check_jwt
def get_file_url(validated_data=None,file_id:str=None): 
    try:
        user_id = validated_data['sub']
        print(user_id,file_id)
        if file_id is None and user_id is None:
            return jsonify({"error": 'No file id or user id found'}), 400
        url = db.create_url(user_id, file_id)
        return jsonify({
            "message": url
        }), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
#*done
@app.route(f'{API_VERSION}/delete/<file_id>', methods=['DELETE'])
@check_jwt
def delete_file(validated_data=None,file_id:str=None):
    try:
        user_id = validated_data['sub']
        if file_id is None and user_id is None:
            return jsonify({"error": 'No file id or user id found'}), 400
        
        db.delete_profile(user_id,file_id)
        return jsonify({
            "message": 'File deleted successfully'
        }), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    

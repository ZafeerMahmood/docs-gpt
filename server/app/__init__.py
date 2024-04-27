from flask import Flask
from flask_cors import CORS
from llamaapi import LlamaAPI
from llama_parse import LlamaParse 
from app.config import Config


app = Flask(__name__)
CORS(app)
llama = LlamaAPI(Config.LLAMA_API)
app.llama = llama
app.parser=LlamaParse(
    api_key=Config.LL,
    result_type="markdown",
)

from app.routes import api


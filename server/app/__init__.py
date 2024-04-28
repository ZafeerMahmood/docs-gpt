from flask import Flask
from flask_cors import CORS
from llamaapi import LlamaAPI
from llama_parse import LlamaParse 
from app.config import Config
from supabase import create_client, Client

app = Flask(__name__)
CORS(app)

supabase: Client = create_client(Config.SUPABASE_URL, Config.SUPABASE_KEY)
llama = LlamaAPI(Config.LLAMA_API)
app.llama = llama
app.parser=LlamaParse(
    api_key=Config.LLAMA_PARSER,
    result_type="markdown",
)
app.supabase = supabase

from app.routes import api


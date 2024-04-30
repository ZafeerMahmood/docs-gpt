from app import app
from app.config import Config 

if Config.SUPABASE_ANON is None:
    raise Exception('SUPABASE_ANON not found in .env file')

if Config.SUPABASE_JWT is None:
    raise Exception('SUPABASE_JWT not found in .env file')

if Config.SUPABASE_URL is None:
    raise Exception('SUPABASE_URL not found in .env file')

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5555)



from app import app
llama=app.llama

def llm_process_text(query: str, model: str):
    try:
        api={
            "messages": [
                {"role": "user", "content": query},
            ],
        }
        response = llama.run(api)
        return response
    except Exception as e:
        print(f"Error: {e}")
        return {"detail": str(e)}
    

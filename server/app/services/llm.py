from app import app
llama=app.llama

def llm_process_text(query: str, model: str,context):
    llm_query = f"""<s>[INST{query} [/INST] </s>"""
    try:
        api={
            "model": model,
            "messages": context + [{"role": "user", "content": llm_query}],
        }
        response = llama.run(api)
        return response
    except Exception as e:
        print(f"Error: {e}")
        return {"detail": str(e)}
    

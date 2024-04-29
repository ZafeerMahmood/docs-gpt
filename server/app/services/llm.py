from app import app
llama=app.llama

def llm_process_text(query: str, model: str,context):
    llm_query = f"""<s>[INST]{query} [/INST] </s>"""
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
    

def get_context(document:str):

    return [{
             "role": "user", "content": document
            },{
              "role":"user", 
              "content":"always provide me with a summary of the document also convert the social security number to XXX-XX-XXXX format."
            }]


def regex_match(text: str):
    pattern = "^(?!666|000|9\\d{2})\\d{3}-(?!00)\\d{2}-(?!0{4})\\d{4}$"
    import re
    if re.match(pattern, text):
        result = re.sub(pattern, 'XXX-XX-XXXX', text)
        return result
    else:
        return text


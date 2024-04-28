
from dotenv import load_dotenv
from llama_parse import LlamaParse
from llamaapi import LlamaAPI
load_dotenv()
import json

parser = LlamaParse(
    api_key='',
    result_type="markdown", 
)

llama = LlamaAPI('')

documents = parser.load_data('./w2.pdf')
print(documents[0].text)

doc="""
|Employee|Reference|Copy|
|---|---|---|
|Wage Statement and Tax|2021|This summary section is included with your W-2 to help describe this portion in more detail. The reverse side includes general information that you may also find helpful. The following reflects your final pay stub, plus any adjustments made by your employer.|

|W-2|Copy C for employee’s records.|OMB No. 1545-0008|
|---|---|---|
|Control number|Dept.|Corp. Employer use only|
|0000000765 VVV|Y034|1056|

Employer’s name, address, and ZIP code
CAREFUSION RESOURCES LLC
3750 TORREY VIEW COURT
SAN DIEGO, CA 92130

Employee’s name, address, and ZIP code
ROBERTO ANDERSEN
19256 RED LAKES LOOP
BEND, OR 97702

|Employer’s FED ID number|Employee’s SSA number|
|---|---|
|20-5247993|XXX-XX-7564|

|Wages, tips, other comp.|Federal income tax withheld|
|---|---|
|375228.23|67293.88|

(Repeating similar tables for Social Security, Medicare, Control number, Employer's name and address, Employee's name and address, State and Local taxes)

|Federal|Filing|Copy|
|---|---|---|
|Wage Statement and Tax|2021|W-2|

|W-2|OMB No. 1545-0008|
|---|---|
|Copy B to be filed with employee’s Federal Income Tax Return.| |
|Copy 2 to be filed with employee’s State Income Tax Return.| |
|Copy 2 to be filed with employee’s City or Local Income Tax Return.| |
"""
prompt = """Give Summary of the document below it is a w-2 form so hide sensitive information: """
llm_query = f"""<s>[INST]{prompt} [/INST] </s> [INST]{documents[0].text}[/INST]"""


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
    


response = llm_process_text(llm_query, "llama-7b-chat")
print(json.dumps(response.json(), indent=2))


response = llm_process_text("give me the summary in detail", "llama-7b-chat")
print(json.dumps(response.json(), indent=2))

from app import app
supabase=app.supabase

def get_files(id):
    try:
        res=supabase.table('profiles').select('*').eq('id',id).execute()
        return res.data
    except Exception as e:
        print(e)
        return None
    
def add_file(id,file_name,file_content):
    try:
        res=supabase.table('profiles').upsert({'id':id,"file_name":file_name,"file_content":file_content}).execute()
        return res
    except Exception as e:
        print(e)
        return None

def delete_file(id,file_name):
    try:
        res=123
        res = supabase.table('profiles').delete().eq('file_name',file_name).eq('id',id).execute()
        fileresponse = supabase.storage.from_('TaxGPT').remove(f'{id}/{file_name}')
        return [res, fileresponse]
    except Exception as e:
        print(e)
        return None
    
def upload_pdf(file_path, id,file_name):
    try:
        with open(file_path, 'rb') as f:
           res=supabase.storage.from_("TaxGPT").upload(file=f,path=f'{id}/{file_name}', file_options={"content-type": "application/pdf"})
           return res.json()
    except Exception as e:
        print(e)
        return None

def create_url( id, filename):
    try:
        res=supabase.storage.from_("TaxGPT").create_signed_url(f'{id}/{filename}', 60)
        return res['signedURL']
    except Exception as e:
        print(e)
        return None
    
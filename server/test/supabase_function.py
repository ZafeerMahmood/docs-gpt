
from supabase import create_client, Client
supabase: Client = create_client('','')

#* works as expected
def get_files(supabase,id):
    try:
        res=supabase.table('profiles').select('*').eq('id',id).execute()
        return res.data
    except Exception as e:
        print(e)
        return None
    
#* works as expected
def add_file(supabase,id,file_name,file_content):
    try:
        res=supabase.table('profiles').upsert({'id':id,"file_name":file_name,"file_content":file_content}).execute()
        return res
    except Exception as e:
        print(e)
        return None

# * works as expected
def delete_file(supabase,id,file_name):
    try:
        res=123
        res = supabase.table('profiles').delete().eq('file_name',file_name).eq('id',id).execute()
        fileresponse = supabase.storage.from_('TaxGPT').remove(f'{id}/{file_name}')
        return [res, fileresponse]
    except Exception as e:
        print(e)
        return None
    
#* works as expected
def upload_pdf(supabase,file_path, id,file_name):
    try:
        with open(file_path, 'rb') as f:
           res=supabase.storage.from_("TaxGPT").upload(file=f,path=f'{id}/{file_name}', file_options={"content-type": "application/pdf"})
           return res.json()
    except Exception as e:
        print(e)
        return None

#* works as expected.
def create_url(supabase, id, filename):
    try:
        res=supabase.storage.from_("TaxGPT").create_signed_url(f'{id}/{filename}', 60)
        return res['signedURL']
    except Exception as e:
        print(e)
        return None
    

userId='bd91fcc3-c8c9-4132-8967-605d2e3d4ea7'
res=''
res= upload_pdf(supabase, './w2.pdf', userId,'w2.pdf')
print(res)
res= delete_file(supabase,'123','w2.pdf')
print(res)
res= create_url(supabase, userId, 'w2.pdf')
print(res)
res= add_file(supabase,userId,'w2.pdf','scanned content of w2.pdf')
print(res)
res= get_files(supabase,userId)
print(res)
res= delete_file(supabase,userId,'w2.pdf')
print(res)


from app import app

class DB:
    def __init__(self):
        self.supabase = app.supabase

    def get_files(self, id):
        try:
            res = self.supabase.table('profiles').select('*').eq('id', id).execute()
            return res.data
        except Exception as e:
            print(e)
            return None

    def add_file(self, id, file_name, file_content):
        try:
            res = self.supabase.table('profiles').upsert({'id': id, "file_name": file_name, "file_content": file_content}).execute()
            return res
        except Exception as e:
            print(e)
            return None

    def delete_file(self, id, file_name):
        try:
            res = self.supabase.table('profiles').delete().eq('file_name', file_name).eq('id', id).execute()
            fileresponse = self.supabase.storage.from_('TaxGPT').remove(f'{id}/{file_name}')
            return [res, fileresponse]
        except Exception as e:
            print(e)
            return None

    def upload_pdf(self, file_path, id, file_name):
        try:
            with open(file_path, 'rb') as f:
                res = self.supabase.storage.from_("TaxGPT").upload(file=f, path=f'{id}/{file_name}', file_options={"content-type": "application/pdf"})
                return res.json()
        except Exception as e:
            print(e)
            return None

    def create_url(self, id, filename):
        try:
            res = self.supabase.storage.from_("TaxGPT").create_signed_url(f'{id}/{filename}', 60)
            return res['signedURL']
        except Exception as e:
            print(e)
            return None

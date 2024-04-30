FROM python:3.11.6-slim

ENV SUPABASE_URL=
ENV SUPABASE_ANON=
ENV SUPABASE_JWT=
ENV LLAMA_API=
ENV LLAMA_PARSE=
ENV SUPABASE_KEY=

WORKDIR /app

ADD . /app

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 5555

CMD ["python", "server.py"]
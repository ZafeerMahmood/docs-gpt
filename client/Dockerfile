FROM node:20.11-slim

WORKDIR /app
ADD . /app
RUN npm install -g create-vite
RUN npm install

ENV SUPABASE_URL=
ENV SUPABASE_ANON=
ENV SUPABASE_JWT=
ENV SUPABASE_KEY=
ENV LLAMA_API=
ENV LLAMA_PARSE=

EXPOSE 3000

CMD ["npm", "run", "dev"]

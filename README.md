> Depricated Working on [Docs-pdf](https://github.com/ZafeerMahmood/taxgptAssignment/tree/docs-pdf) 

## Table of Contents

- [Description](#description)
- [Requirements](#requirements)
- [Installation](#installation)
- [Running the App Locally with Git](#running-the-app-locally-with-git)
- [Running the App Locally with Docker](#running-the-app-locally-with-docker)
- [Startup Script](#startup-script)
- [Demo | Deployment](#demo--deployment)
- [Details](#details)
  - [Client-side](#client-side)
  - [Server-side](#server-side)

## Description

This assignment aims to design and implement a full-stack web application that facilitates the uploading and parsing of a W-2 form.
The web application should let users chat and ask specific questions about their W-2 data.

## Requirements

- Node
- python
- docker
- supabase account [database](https://supabase.com/)
- enable auth email in supabase dashboard.
  - also disable email verification for ease of testing.
- enable storage bucket name `TaxGPT`
- supabase database schema

  ```sql
  create table public.profiles (
    id uuid not null references auth.users on delete cascade,
    file_name text,
    file_content text,
    primary key (id)
  );

  ```

- get llama api key [llama-api](https://console.llama-api.com/)
- get llama index api key [llama-index](https://cloud.llamaindex.ai/api-key)

## Installation

`client .env file`

```env
VITE_API_URL=http://127.0.0.1:5555/api
VITE_SUPABASE_URL=<In Supabase Dashboard>
VITE_SUPABASE_ID=<In Supabase Dashboard>
VITE_SUPABASE_ANON_KEY=<In Supabase Dashboard>
```

`server .env file`

```env
SUPABASE_URL=<In Supabase Dashboard>
SUPABASE_ANON=<In Supabase Dashboard>
SUPABASE_JWT=<In Supabase Dashboard>
SUPABASE_KEY=<<In Supabase Dashboard>>
LLAMA_API=<llama-api>
LLAMA_PARSE=<llama-index>
```

### Running the app locally with git

`client`

```bash
git clone https://github.com/ZafeerMahmood/taxgptAssignment.git
cd client
npm install
npm run dev
```

`server`

```bash
cd server
pip install -r requirements.txt
python3 server.py | py server.py

```

## Running the app locally with docker

> does not require any environment setup

```bash
git clone https://github.com/ZafeerMahmood/taxgptAssignment.git
docker-compose up -d
```

> requires selenium to run auto logins in the user and wait for file input

### startup script

```bash
cd start
pip install selenium
python3 main.py | py main.py
```

## Demo | Deployment
> no longer available 
- client [demo](https://taxgptassignment.pages.dev/)
- server [demo](https://taxgpt-backend-jhgyr6ocxa-uc.a.run.app/)

## details

- The client is built using `vite react` and the server is built using `flask`.
- for llm i used `llama-2b-chat` model.
- for parsing w2 form i used `llama-index` model.
- for database i used `supabase`.
- for deployment i used `google cloud run` and `cloudflare pages`.
- thought process is in `./TODO.md`
- requirements are in `./Requirements.md`

### client-side

- use zustand for state management.
- daisyUI for tailwindcss components.
- supabase-js for auth services.

### server-side

- flask for api.
- supabase for database.
- llama for llm.
- llama-index for parsing w2 form.

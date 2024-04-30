# TAX GPT Assignment

taxGPT take home assignment

## Description

This assignment aims to design and implement a full-stack web application that facilitates the uploading and parsing of a W-2 form.
The web application should let users chat and ask specific questions about their W-2 data.

## Requirements

- Node
- python
- docker

## supabase

- enable auth email.
- enable storage bucket name `TaxGPT`

```sql
create table public.profiles (
  id uuid not null references auth.users on delete cascade,
  file_name text,
  file_content text,
  primary key (id)
);

```

## docker-compose.yml

```bash
docker-compose up -d
```

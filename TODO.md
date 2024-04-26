# Things TODO

Things todo or ideas to implement
my thoughts on how to implement the project

## client

React app

- [x] Chat to ui mange with useChat store
- [x] Supabase Auth
  - [x] Login
  - [x] getAccessToken
- [x] Api layer to all outgoing requests
  - [x] JWT authorization headers
  - [ ] send file to server | POST
  - [ ] send message | POST params=[message, file, user_id,context?]
  - [ ] get All files | GET
- [ ] husky pre-commit hooks
- [ ] UI components
  - [x] ChatMessage
  - [x] ChatInput
  - [x] uploading file type=[pdf]
- [x] Error handling / Error boundary
- [ ] Tests
  - [ ] Unit tests
  - [ ] Integration tests
- [ ] Dockerfile
- [ ] Deployment

## server

Flask app

- [x] Project structure For flask
- [x] Requirement.txt
- [x] JWT validation
- [ ] DB { supabase }
  - [ ] User table
    - [ ] user_name
    - [ ] files [file_id]
    - [ ] File block storage
- [ ] Message table | Not sure to implement this or not | it can be done in client local storage

- [ ] Api layer
  - [ ] send message | POST params=[message, file, user_id,context?] call Ollama | gpt model | any llm
  - [ ] upload file | POST
  - [ ] get All files | GET
  - [ ] download file | GET
- [ ] Dockerfile
- [ ] Tests
  - [ ] Unit tests
- [ ] Deployment

## LLM

llm's to implement

- [ ] OpenAI GPT | expensive not feasible.
- [ ] Ollama | llaVa vision model | difficult to deploy on any free service.
- [ ] llama | Most likely to implement provides $5 free credit.

## overall

- [ ] Documentation
- [ ] README
- [ ] docker-compose
- [ ] startup scripts
  - [ ] one for that requires to clone and .env file | ignore that
  - [ ] one for that requires to run docker-compose up in end run a startup script to create user and load data
- [ ] Deployment
  - [ ] as a single flask that returns react build dist
  - or
  - [ ] separate app for client and server
  - Note sure for now

## Auth Test

Email : <zafeer746@gmail.com>
Password : 123456

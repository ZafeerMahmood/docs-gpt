# Things TODO

Things todo or ideas to implement
my thoughts on how to implement the project

## client

React app

- [ ] Chat to ui mange with useChat store
- [ ] Supabase Auth
  - [ ] Login
  - [ ] Logout
  - [ ] getAccessToken
- [ ] Api layer to all outgoing requests
  - [ ] JWT authorization headers
  - [ ] send file to server | POST
  - [ ] send message | POST params=[message, file, user_id,context?]
  - [ ] get All files | GET
  - [ ] download file | GET
- [ ] husky pre-commit hooks
- [ ] UI components
  - [ ] Alerts
  - [x] ChatMessage
  - [x] ChatInput
  - [x] loading
  - [ ] uploading file type=[pdf, img]
  - [ ] Custom Context menu to download file or view file
- [x] Error handling / Error boundary
- [ ] Tests
  - [ ] Unit tests
  - [ ] Integration tests
- [ ] Docker
- [ ] Deployment

## server

Flask app

- [x] Project structure For flask
- [ ] Requirement.txt
- [ ] JWT validation
- [ ] DB {supabase}
  - [ ] User table
    - [ ] user_id
    - [ ] files [file_id]
    - [ ] File block storage
- [ ] Message table | Not sure to implement this or not | can be done in client local storage

- [ ] Api layer
  - [ ] send message | POST params=[message, file, user_id,context?] call Ollama | gpt model | any llm
  - [ ] upload file | POST
  - [ ] get All files | GET
  - [ ] download file | GET
- [ ] Database Supabase
- [ ] Docker
- [ ] Tests
  - [ ] Unit tests
- [ ] Deployment

## LLM

llm's to implement

- [ ] OpenAI GPT
- [ ] Ollama
- [ ] llama

## overall

- [ ] Documentation
- [ ] README
- [ ] CI/CD
- [ ] docker-compose
- [ ] Deployment
  - [ ] as a single flask that returns react build dist
  - or
  - [ ] separate app for client and server
  - Note sure for now

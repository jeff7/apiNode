# Node.js Advanced Project

## Setup

1. Clone o repositório
2. Instale as dependências: `npm install`
3. Crie um arquivo `.env` baseado no `.env.example`
4. Inicie o Docker Compose: `docker-compose up`
5. Execute os testes: `npm test`

## Endpoints

### GET /users
Retorna todos os usuários

### GET /users/:id
Retorna um usuário pelo ID

### POST /users
Cria um novo usuário

### PUT /users/:id
Atualiza um usuário existente

### DELETE /users/:id
Deleta um usuário existente

## Docker

Para rodar o projeto com Docker:

```bash
docker-compose up

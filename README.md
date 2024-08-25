# CRUD API - Cadastro

Um CRUD básico utilizando Express.js e Prisma, desenvolvido para manipulação de dados de usuários.

## 📚 Tecnologias Utilizadas

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)
![mongodb](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

## 🚀 Como Executar

1. **Clone o repositório**:
    ```bash
    git clone https://github.com/Rizandrodev/crud-Api-cadastro.git
    cd crud-Api-cadastro
    ```

2. **Instale as dependências**:
    ```bash
    npm install
    ```

3. **Configure o Prisma**:
    - Crie e configure o arquivo `.env` com as credenciais do seu banco de dados.
    - Execute as migrações:
      ```bash
      npx prisma migrate dev
      ```

4. **Inicie o servidor**:
    ```bash
    npm start
    ```
    O servidor será executado na porta `3000`.

## 📄 Rotas Disponíveis

- **POST `/user`**: Cria um novo usuário.
    - Body:
      ```json
      {
        "name": "Nome do Usuário",
        "email": "email@exemplo.com",
        "age": 25
      }
      ```
    - Resposta:
      ```json
      {
        "name": "Nome do Usuário",
        "email": "email@exemplo.com",
        "age": 25
      }
      ```

- **GET `/user`**: Retorna todos os usuários cadastrados ou filtra por `name`, `age` ou `email` via query params.

- **DELETE `/user/:id`**: Deleta um usuário com base no `id` fornecido.


Memória atualizada
Aqui está um README.md mais interessante e organizado para o seu projeto de CRUD básico com Express.js:

markdown
Copiar código
# CRUD API - Cadastro

Um CRUD básico utilizando Express.js e Prisma, desenvolvido para manipulação de dados de usuários.

## 📚 Tecnologias Utilizadas

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)

## 🚀 Como Executar

1. **Clone o repositório**:
    ```bash
    git clone https://github.com/Rizandrodev/crud-Api-cadastro.git
    cd crud-Api-cadastro
    ```

2. **Instale as dependências**:
    ```bash
    npm install
    ```

3. **Configure o Prisma**:
    - Crie e configure o arquivo `.env` com as credenciais do seu banco de dados.
    - Execute as migrações:
      ```bash
      npx prisma migrate dev
      ```

4. **Inicie o servidor**:
    ```bash
    npm start
    ```
    O servidor será executado na porta `3000`.

## 📄 Rotas Disponíveis

- **POST `/user`**: Cria um novo usuário.
    - Body:
      ```json
      {
        "name": "Nome do Usuário",
        "email": "email@exemplo.com",
        "age": 25
      }
      ```
    - Resposta:
      ```json
      {
        "name": "Nome do Usuário",
        "email": "email@exemplo.com",
        "age": 25
      }
      ```

- **GET `/user`**: Retorna todos os usuários cadastrados ou filtra por `name`, `age` ou `email` via query params.

- **DELETE `/user/:id`**: Deleta um usuário com base no `id` fornecido.

## 🛠 Código Principal

```javascript
import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

const Prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(cors());

app.post('/user', async (req, res) => {
    await Prisma.user.create({
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name,
        },
    });
    res.status(201).send(req.body);
});

app.get('/user', async (req, res) => {
    let users = [];
    if (req.query) {
        users = await Prisma.user.findMany({
            where: {
                name: req.query.name,
                age: req.query.age,
                email: req.query.email,
            },
        });
    } else {
        users = await Prisma.user.findMany();
    }
    res.status(200).send(users);
});

app.delete('/user/:id', async (req, res) => {
    await Prisma.user.delete({
        where: {
            id: req.params.id,
        },
    });
    res.status(200).send({ message: 'Usuário deletado com sucesso' });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
📌 Considerações Finais
Esse projeto é uma implementação simples de uma API RESTful para cadastro de usuários, utilizando tecnologias modernas e eficientes. Sinta-se à vontade para expandir as funcionalidades e adaptar conforme suas necessidades.



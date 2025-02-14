# Book API

## Descrição

Esta é uma API para gerência de uma livraria. Ela permite criar, deletar, atualizar e listar livros. A API também possui documentação utilizando Swagger.

## Estrutura do Projeto

A estrutura do projeto é a seguinte:

```sh
├── api/
│   ├── package.json
│   ├── src/
│   │   └── controllers/
│   │   │   └── bookController.js
│   │   └── index.js
│   │   └── models/
│   │   │   └── bookModel.js
│   │   └── routes/
│   │   │   └── routes.js
│   │   │   └── routesPaths/
│   │   │   │   └── bookRoutes.js
│   │   └── swagger.json
│   └──.gitignore
```

## Arquivos e Diretórios

- **.gitignore**: Arquivo que especifica quais arquivos e diretórios devem ser ignorados pelo Git.
api/: Diretório principal da API.

- **package.json**: Arquivo de configuração do npm, contendo informações sobre o projeto e suas dependências.

    - **src/**: Diretório contendo o código-fonte da API.
        - **controllers/**: Diretório contendo os controladores da API.
            - **bookController.js**: Controlador responsável pelas operações relacionadas aos livros.
        
        - **index.js**: Arquivo principal da API, onde o servidor é inicializado.
        - **models/**: Diretório contendo os modelos da API.
            - **bookModel.js**: Modelo do livro, definindo a estrutura dos dados no banco de dados.
        
        - **routes/**: Diretório contendo as rotas da API.
            - **routes.js**: Arquivo principal de rotas, onde todas as rotas são registradas.

            - **routesPaths/**: Diretório contendo as rotas específicas.
                - **bookRoutes.js**: Arquivo contendo as rotas relacionadas aos livros.
            
        - **swagger.json**: Arquivo de configuração do Swagger para documentação da API.

## Instalação

1. Clone o repositório:
```markdown
git clone <URL_DO_REPOSITORIO>
```

2. Navegue até o diretório `/api`:
```markdown
cd api
```

3. Instale as dependências:
```markdown
npm install
```

## Uso

Para iniciar o servidor em modo de desenvolvimento, execute:
```markdown
npm run dev
```

O servidor estará disponível em `http://localhost:3000`.

## Endpoints

### Livros

- **POST /book/create**: Cria um novo livro.
- **DELETE /book/delete/:id**: Deleta um livro pelo ID.
- **GET /book/listAll**: Lista todos os livros.
- **PUT /book/update/:id**: Atualiza um livro pelo ID.

### Documentação

- **GET /documentation**: Acessa a documentação da API gerada pelo Swagger.

## Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`).
4. Faça push para a branch (`git push origin feature/nova-feature`).
5. Crie um novo Pull Request.

## Autor

Martiniano Gomes.
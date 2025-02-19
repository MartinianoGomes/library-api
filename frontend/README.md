# Library API | Frontend

Este arquivo README descreve como deverá ser desenvolvido o frontend do projeto.

## Estrutura do Projeto

```sh
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── assets/
│       ├── images/
│       └── fonts/
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── ...
│   ├── styles/
│   │   ├── main.css
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
└── README.md
```

## Descrição dos Diretórios e Arquivos

`public/`

Este diretório contém arquivos estáticos que serão servidos diretamente pelo servidor web.

- `index.html`: O arquivo HTML principal que será carregado no navegador.
- `favicon.ico`: O ícone do site que aparece na aba do navegador.
- `assets/`: Diretório para armazenar recursos estáticos como imagens e fontes.

`src/`

Este diretório contém o código-fonte do projeto.

- `components/`: Diretório para componentes reutilizáveis da interface do usuário.
    - `Header.js`: Componente de cabeçalho.
    - `Footer.js`: Componente de rodapé.
- `styles/`: Diretório para arquivos de estilo CSS.
    - `main.css`: Arquivo CSS principal.
- `App.js`: Componente principal da aplicação.
- `index.js`: Ponto de entrada da aplicação.

## Arquivos de Configuração
- `.gitignore`: Arquivo que especifica quais arquivos e diretórios devem ser ignorados pelo Git.
- `package.json`: Arquivo de configuração do npm, contendo informações sobre o projeto e suas dependências.
- `README.md`: Arquivo de documentação do projeto.
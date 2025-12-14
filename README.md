# 🧠 Redux Project

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![Redux](https://img.shields.io/badge/Redux-State%20Management-purple)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![License](https://img.shields.io/badge/license-MIT-green)

Projeto frontend desenvolvido para **estudo e prática de Redux**, focado em **gerenciamento de estado global**, separação de responsabilidades e fluxo de dados previsível.

O objetivo principal é **consolidar conceitos fundamentais de Redux** e demonstrar boas práticas para projetos frontend modernos.


 📌 **Visão Geral**

Principais conceitos trabalhados no projeto:

- 🧠 **Redux Store**
- 🎯 **Actions**
- 🔁 **Reducers**
- 🧩 Estado global previsível
- 🔄 Fluxo unidirecional de dados
- 📦 Organização de código frontend

Este projeto é ideal como **base didática** ou **projeto de portfólio** para demonstrar domínio de Redux.


 🏗️ **Arquitetura de Estado (Redux)**

Fluxo padrão do Redux utilizado no projeto:

```

UI (Components)
↓
Dispatch (Actions)
↓
Reducers
↓
Store (Global State)
↓
UI atualizada automaticamente

```

Esse padrão garante previsibilidade, facilidade de debug e escalabilidade.


 📂 **Estrutura de Diretórios**

```

redux-project/
├── src/
│   ├── actions/               # Actions do Redux
│   │   ├── index.js
│   │   └── types.js
│   │
│   ├── reducers/              # Reducers
│   │   ├── index.js           # Combinação dos reducers
│   │   └── exampleReducer.js
│   │
│   ├── store/                 # Configuração da Store
│   │   └── store.js
│   │
│   ├── components/            # Componentes da interface
│   │   ├── Counter.js
│   │   └── ExampleComponent.js
│   │
│   ├── App.js                 # Componente raiz
│   └── index.js               # Entry point da aplicação
│
├── public/                     # Arquivos públicos
│
├── package.json                # Dependências e scripts
└── README.md                   # Documentação

````

> A estrutura permite fácil evolução para Redux Toolkit, middlewares e aplicações maiores.


 ⚙️ **Tecnologias Utilizadas**

- **JavaScript (ES6+)**
- **Redux**
- **React** (se aplicável)
- **Node.js**
- **npm / yarn**


 🚀 **Como Executar o Projeto**

# Pré-requisitos
- Node.js **16+**
- npm ou yarn

# Instalação
```bash
npm install
# ou
yarn install
````

# Executar em ambiente de desenvolvimento

```bash
npm start
# ou
yarn start
```

A aplicação estará disponível em:

```
http://localhost:3000
```


# Pacotes

- npm i react-router-dom

- npm i localforage

- npm i match-sorter

- npm i sort-by

- npm i redux react-redux @reduxjs/toolkit

- npm i redux-saga

- npm i axios


# Tela Inicial

![Tela Inicial](https://github.com/davidbehling/redux-project/blob/main/public/images/01_Tela_login.png)

# Tela após login

![Tela Inicial](https://github.com/davidbehling/redux-project/blob/main/public/images/02_Tela_apos_login.png)

# Tela de cadastro de endereço

![Tela Inicial](https://github.com/davidbehling/redux-project/blob/main/public/images/03_Tela_cadastro_endereco.png)

# Tela após cadastro de endereço

![Tela Inicial](https://github.com/davidbehling/redux-project/blob/main/public/images/04_Tela_apos_cadastro_endereco.png)


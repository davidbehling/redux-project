# 🧠 Redux Project

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![Redux](https://img.shields.io/badge/Redux-State%20Management-purple)
![Redux-Saga](https://img.shields.io/badge/Redux--Saga-Async%20Logic-orange)
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
├── public/
│   ├── favicon.ico                                   Ícone de favorito da aplicação
│   ├── logo192.png                                   Logo da aplicação em 192x192px
│   ├── logo512.png                                   Logo da aplicação em 512x512px
│   ├── manifest.json                                 Arquivo de manifesto para PWA (Progressive Web App)
│   ├── robots.txt                                    Instruções para web crawlers (SEO)
│   ├── index.html                                    Arquivo HTML principal da aplicação
│   └── images/					Imagens
│
├── src/
│   ├── App.js                                        Componente raiz que envolve toda a aplicação com Redux Provider e BrowserRouter
│   ├── index.js                                      Arquivo de entrada que renderiza App no DOM
│   ├── index.css                                     Estilos globais da aplicação
│   │
│   ├── components/
│   │   └── Header/
│   │       ├── index.js                              Componente Header com navegação, logo e botões de Login/Logout
│   │       └── header.css                            Estilos do componente Header
│   │
│   ├── pages/
│   │   ├── Login/
│   │   │   ├── index.js                              Página de autenticação do usuário com formulário de nome e email
│   │   │   └── login.css                             Estilos da página de Login
│   │   │
│   │   ├── Home/
│   │   │   ├── index.js                              Página inicial que exibe dados do usuário logado e gerencia endereços
│   │   │   └── home.css                              Estilos da página Home
│   │   │
│   │   └── Address/
│   │       ├── index.js                              Página para cadastrar/editar endereço do usuário
│   │       └── address.css                           Estilos da página de Address
│   │
│   ├── redux/
│   │   ├── store.js                                  Configuração da Redux Store com Redux-Saga middleware
│   │   ├── reducers.js                               Arquivo que combina todos os reducers da aplicação
│   │   ├── sagas.js                                  Arquivo raiz que combina todas as sagas
│   │   │
│   │   └── user/
│   │       ├── slice.js                              Redux Slice com reducers para gerenciar estado do usuário (login, logout, endereço)
│   │       └── saga.js                               Redux-Saga com lógica assíncrona para requisições HTTP de usuários
│   │
│   └── router/
│       └── index.js                                  Configuração de rotas da aplicação (Login, Home, Address)
│
├── .dockerignore                                     Arquivo que especifica quais arquivos o Docker deve ignorar
├── .gitignore                                        Arquivo que especifica quais arquivos git deve ignorar
├── Dockerfile                                        Configuração para criar imagem Docker da aplicação (Node 18 Alpine)
├── Makefile                                          Scripts make para facilitar comandos Docker (docker, build, bash, stop)
├── docker-compose.dev.yml                            Configuração Docker Compose para desenvolvimento
├── package.json                                      Arquivo de configuração do projeto com dependências e scripts npm
├── package-lock.json                                 Lock file do npm com versões exatas das dependências
├── yarn.lock                                         Lock file do yarn com versões exatas das dependências
├── README.md                                         Documentação do projeto com screenshots e instruções
└── readme.txt                                        Arquivo de texto adicional

````

> A estrutura permite fácil evolução para Redux Toolkit, middlewares e aplicações maiores.


 ⚙️ **Tecnologias Utilizadas**

- JavaScript (ES6+)
- React 18.3.1
- Redux & Redux Toolkit
- Redux-Saga
- React Router DOM v6
- Axios
- Node.js
- npm / yarn
- Docker & Docker Compose


 🚀 **Como Executar o Projeto**

# Pré-requisitos
- Node.js **16+**
- npm ou yarn
- Docker e Docker Compose

# Instalação
```bash
npm install
# ou
yarn install
````

# Executar em ambiente de desenvolvimento

```bash
make docker
```

# A aplicação estará disponível em:

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


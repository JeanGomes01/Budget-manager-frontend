<h1 align="center">Projeto - React JS : Gerenciamento de Orçamento - Budget Manager</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/JeanGomes01/Budget-manager-frontend">

  <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/JeanGomes01/Budget-manager-frontend" />

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/JeanGomes01/Budget-manager-frontend">
  
  <a href="https://github.com/JeanGomes01/Github-Blog/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/JeanGomes01/Budget-manager-frontend">
  </a>
    
   <a href="https://github.com/JeanGomes01/Budget-manager-frontend/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/JeanGomes01/Budget-manager-frontend?style=social">
  </a>
</p>

<p align="center">Este é o frontend da aplicação **Budget Manager**, um sistema de gerenciamento de orçamentos para clientes, desenvolvido utilizando **ReactJS** e integrando com uma API backend para gerenciar usuários, clientes, materiais e orçamentos. A aplicação é parte de um projeto completo com autenticação JWT e operações CRUD.
 </p>

## Funcionalidades

- Autenticação de usuários (Login/Logout)
- Registro de novos usuários
- Gerenciamento de orçamentos (criação, visualização, atualização)
- Listagem e gerenciamento de materiais
- Interface amigável e responsiva

## 🚀 Tecnologias Utilizadas

- **ReactJS**: Biblioteca JavaScript para construção de interfaces de usuário.
- **React Router**: Navegação entre páginas da aplicação.
- **Styled Components**: Para estilização dinâmica e modular.
- **Axios**: Realização de requisições HTTP para o backend.
- **TypeScript**: Para tipagem estática.
- **ThunderClient**: Extensão usada para testar rotas HTTP durante o desenvolvimento.

## Requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- Node.js v14 ou superior
- NPM ou Yarn
- Backend do Budget Manager rodando e acessível via API

## Instalação

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/budget-manager-frontend.git
cd budget-manager-frontend
```

````

### 2. Instalar dependências

```bash
npm install
# ou
yarn install
````

### 3. Configuração

Edite o arquivo `.env` e configure o endpoint da API backend:

```env
REACT_APP_API_URL=http://localhost:3000
```

### 4. Rodar a aplicação

```bash
npm start
# ou
yarn start
```

Isso iniciará o servidor de desenvolvimento e você poderá acessar a aplicação no navegador em `http://localhost:5173`.

## Estrutura do Projeto

```bash
├── src
│   ├── components    # Componentes reutilizáveis da interface
│   ├── pages         # Páginas principais da aplicação (Login, Registro, Orçamentos)
│   ├── services      # Configurações de Axios para comunicação com o backend
│   ├── styles        # Estilização global e temas
│   ├── App.tsx       # Arquivo principal da aplicação
│   └── index.tsx     # Ponto de entrada da aplicação
└── README.md         # Documentação do projeto
```

## Scripts Disponíveis

- **`npm start`**: Executa a aplicação em modo de desenvolvimento.
- **`npm run build`**: Gera a versão otimizada para produção.
- **`npm test`**: Executa os testes automatizados.

## Contribuindo

Contribuições são sempre bem-vindas! Se você encontrar problemas, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto é licenciado sob a **MIT License** - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Roadmap

- [x] Autenticação de Usuários: Implementar login e registro de usuários com autenticação JWT.

- [x] CRUD de Clientes: Permitir o cadastro, edição, visualização e exclusão de clientes.

- [x] CRUD de Orçamentos: Implementar a funcionalidade de criação, edição, visualização e exclusão de orçamentos.

- [x] CRUD de Materiais: Gerenciamento de materiais utilizados nos orçamentos.

- [x] Integração Frontend e Backend: Conectar o front-end em React ao back-end utilizando Axios para comunicação com a API.

<!-- --------------------- -->

## UI UX

|                Tela login                |               Tela criar cliente                |
| :--------------------------------------: | :---------------------------------------------: |
| ![Tela de início](github/tela_login.png) | ![Tela about me](github/tela_criar_cliente.png) |

|              Tela de home Cliente               |                   Tela de Criar Materiais                   |
| :---------------------------------------------: | :---------------------------------------------------------: |
| ![Tela de Skills](github/tela_Home_cliente.png) | ![Tela de Criar materiais](github/tela_Criar_materiais.png) |

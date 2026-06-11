# 🍔 Hamburgueria Thales - Sistema Completo de Gestão de Lanches

Sistema acadêmico completo para gerenciamento de hamburgueria com frontend React + Vite e backend Node.js + Express + Prisma + MySQL.

## 📋 Sumário

- [Visão Geral](#visão-geral)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Execução](#execução)
- [API REST](#api-rest)
- [Funcionalidades](#funcionalidades)
- [Design](#design)
- [Documentação](#documentação)

---

## 👀 Visão Geral

**Hamburgueria Thales** é um sistema profissional de gestão de lanches que permite:

✅ Cadastrar hambúrgueres e lanches  
✅ Editar informações de produtos  
✅ Excluir produtos do catálogo  
✅ Listar todos os lanches disponíveis  
✅ Pesquisar por nome  
✅ Filtrar por categoria  
✅ Visualizar detalhes completos  
✅ Gerenciar disponibilidade  

---

## 🛠️ Tecnologias

### Backend
- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **Prisma ORM** - ORM para banco de dados
- **MySQL** - Banco de dados
- **CORS** - Compartilhamento de recursos
- **Dotenv** - Variáveis de ambiente

### Frontend
- **React 18** - Biblioteca UI
- **Vite** - Build tool e dev server
- **React Router** - Roteamento
- **Axios** - Cliente HTTP
- **Tailwind CSS** - Estilização
- **PostCSS** - Pré-processador CSS

---

## 📁 Estrutura do Projeto

```
hamburgueria-thales/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── prisma.js
│   │   ├── controllers/
│   │   │   └── SnackController.js
│   │   ├── models/
│   │   │   └── SnackModel.js
│   │   ├── routes/
│   │   │   └── SnackRoutes.js
│   │   ├── middlewares/
│   │   │   └── errorHandler.js
│   │   ├── app.js
│   │   └── server.js
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── seed.js
│   ├── package.json
│   ├── .env
│   ├── .env.example
│   ├── .gitignore
│   └── README.md
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Header.jsx
    │   │   ├── Footer.jsx
    │   │   ├── SnackCard.jsx
    │   │   ├── SnackForm.jsx
    │   │   ├── SnackTable.jsx
    │   │   ├── SearchBar.jsx
    │   │   ├── ModalDelete.jsx
    │   │   ├── Loading.jsx
    │   │   └── ErrorMessage.jsx
    │   ├── pages/
    │   │   ├── HomePage.jsx
    │   │   ├── SnackListPage.jsx
    │   │   ├── CreateSnackPage.jsx
    │   │   ├── EditSnackPage.jsx
    │   │   ├── SnackDetailsPage.jsx
    │   │   └── NotFoundPage.jsx
    │   ├── services/
    │   │   └── api.js
    │   ├── assets/
    │   ├── index.css
    │   ├── App.jsx
    │   └── main.jsx
    ├── index.html
    ├── package.json
    ├── vite.config.js
    ├── tailwind.config.js
    ├── postcss.config.js
    ├── .env.example
    ├── .gitignore
    └── README.md
```

---

## 💻 Instalação

### Pré-requisitos

- Node.js (v16+)
- npm ou yarn
- MySQL Server (v5.7+)

### 1. Clone o Repositório

```bash
cd Teste\ av1
```

### 2. Configure o Backend

```bash
cd backend

# Instale dependências
npm install

# Configure o arquivo .env com suas credenciais MySQL
# .env já contém:
# DATABASE_URL="mysql://root:password@localhost:3306/hamburgueria_db"
# NODE_ENV="development"
# PORT=3000
```

### 3. Configure o Frontend

```bash
cd ../frontend

# Instale dependências
npm install
```

---

## ⚙️ Configuração

### Banco de Dados MySQL

1. **Criar banco de dados**

```sql
CREATE DATABASE hamburgueria_db;
USE hamburgueria_db;
```

2. **Configurar Prisma**

Abra o arquivo `.env` no backend e configure:

```env
DATABASE_URL="mysql://seu_usuario:sua_senha@localhost:3306/hamburgueria_db"
NODE_ENV="development"
PORT=3000
```

3. **Executar Migrações**

```bash
cd backend

# Gerar cliente Prisma
npm run prisma:generate

# Executar migrations
npm run prisma:migrate

# Popular banco com dados de exemplo (seed)
npm run prisma:seed
```

### Variáveis de Ambiente

**Backend (.env)**
```
DATABASE_URL=mysql://root:password@localhost:3306/hamburgueria_db
NODE_ENV=development
PORT=3000
```

**Frontend (.env)**
```
VITE_API_URL=http://localhost:3000/api
```

---

## 🚀 Execução

### Iniciar Backend

```bash
cd backend

# Em desenvolvimento (com hot-reload)
npm run dev

# Em produção
npm start
```

Backend rodará em: `http://localhost:3000`

### Iniciar Frontend

```bash
cd frontend

# Em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

Frontend rodará em: `http://localhost:5173`

---

## 📡 API REST

### Base URL
```
http://localhost:3000/api
```

### Endpoints

#### Listar todos os lanches
```
GET /snacks
Response: { success: true, data: [...], message: "..." }
```

#### Obter lanche por ID
```
GET /snacks/:id
Response: { success: true, data: {...}, message: "..." }
```

#### Criar novo lanche
```
POST /snacks
Body: {
  "nome": "string",
  "categoria": "string",
  "descricao": "string",
  "ingredientes": "string",
  "preco": "number",
  "imagem": "string (opcional)",
  "calorias": "number",
  "disponivel": "boolean"
}
Response: { success: true, data: {...}, message: "Lanche criado com sucesso" }
```

#### Atualizar lanche
```
PUT /snacks/:id
Body: { ...mesmos campos... }
Response: { success: true, data: {...}, message: "Lanche atualizado com sucesso" }
```

#### Deletar lanche
```
DELETE /snacks/:id
Response: { success: true, message: "Lanche deletado com sucesso" }
```

#### Filtrar por categoria
```
GET /snacks/category/:categoria
Response: { success: true, data: [...], message: "..." }
```

#### Pesquisar por nome
```
GET /snacks/search/:nome
Response: { success: true, data: [...], message: "..." }
```

#### Health Check
```
GET /health
Response: { success: true, message: "Server is running", timestamp: "..." }
```

---

## ✨ Funcionalidades

### Home Page
- Dashboard com estatísticas
- Total de lanches
- Produtos disponíveis
- Número de categorias
- Acesso rápido ao cardápio

### Catálogo de Lanches
- Visualização em grid moderno
- Filtro por categoria
- Busca por nome
- Informações de preço e calorias
- Status de disponibilidade

### Criar Lanche
- Formulário validado
- Upload de imagem
- Seleção de categoria
- Informações nutricionais

### Editar Lanche
- Pré-preenchimento de dados
- Atualização em tempo real
- Validação de campos

### Detalhes do Lanche
- Visualização completa
- Lista de ingredientes
- Preço e calorias
- Data de criação e atualização

### Gerenciamento
- Delete com confirmação
- Tratamento de erros
- Loading states
- Mensagens de sucesso

---

## 🎨 Design

### Paleta de Cores
```
Dark:   #1A1A1A (Preto profundo)
Orange: #FF6B00 (Laranja vibrante)
Amber:  #FFC107 (Dourado)
White:  #FFFFFF (Branco)
```

### Características Visuais
- ✓ Layout responsivo (mobile, tablet, desktop)
- ✓ Cards modernos com sombras suaves
- ✓ Efeitos hover animados
- ✓ Botões com feedback visual
- ✓ Transições suaves
- ✓ Tipografia profissional
- ✓ Ícones descritivos
- ✓ Modal de confirmação

### Inspiração
- McDonald's - Estrutura simples e clara
- Burger King - Design moderno
- Madero - Qualidade premium
- Johnny Rockets - Experiência completa

---

## 📊 Banco de Dados

### Tabela: Snack

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INT | Identificador único (PK) |
| nome | VARCHAR(255) | Nome do lanche |
| categoria | VARCHAR(100) | Categoria do produto |
| descricao | TEXT | Descrição detalhada |
| ingredientes | TEXT | Lista de ingredientes |
| preco | FLOAT | Preço em reais |
| imagem | VARCHAR(500) | URL da imagem |
| calorias | INT | Quantidade de calorias |
| disponivel | BOOLEAN | Status de disponibilidade |
| createdAt | DATETIME | Data de criação |
| updatedAt | DATETIME | Data de atualização |

### Índices
- `categoria` - Para filtros rápidos
- `disponivel` - Para status

---

## 📚 Categorias Suportadas

- Hambúrguer Tradicional
- Cheeseburger
- X-Burger
- X-Salada
- X-Bacon
- X-Egg
- X-Tudo
- Smash Burger
- Hambúrguer Artesanal
- Hambúrguer Gourmet
- Hambúrguer Vegetariano
- Hambúrguer Vegano
- Hambúrguer de Frango
- Hambúrguer de Costela
- Hambúrguer Duplo
- Hambúrguer Triplo
- Sanduíche Natural
- Sanduíche de Presunto e Queijo
- Sanduíche de Peito de Peru
- Misto Quente
- Beirute
- Wrap Frio

---

## 🎓 Requisitos Acadêmicos Atendidos

✅ **Backend em Node.js + Express**  
✅ **Prisma ORM para abstração de dados**  
✅ **MySQL como banco de dados**  
✅ **Arquitetura MVC (Models, Controllers, Routes)**  
✅ **API REST com CRUD completo**  
✅ **Frontend em React (SPA)**  
✅ **Roteamento com React Router**  
✅ **Integração com Axios**  
✅ **Tailwind CSS para estilização**  
✅ **Estrutura profissional de código**  
✅ **Validação de dados**  
✅ **Tratamento de erros**  
✅ **Loading states e feedback visual**  
✅ **Componentes reutilizáveis**  
✅ **Migrations e seed com Prisma**  
✅ **README completo e documentação**  

---

## 🐛 Troubleshooting

### Erro: "Cannot find module 'prisma'"
```bash
cd backend
npm install @prisma/client prisma
```

### Erro: "Connection refused" (MySQL)
- Verifique se MySQL está rodando
- Confirme as credenciais no .env
- Teste a conexão: `mysql -u root -p`

### Erro: CORS
- Backend e Frontend devem estar em portas diferentes
- CORS está configurado em `app.js`

### Erro: "Not Found" (404)
- Verifique o caminho das rotas
- Confirme se o backend está rodando
- Verifique a URL da API

---

## 📝 Comandos Úteis

### Backend
```bash
npm run dev                 # Iniciar em desenvolvimento
npm run start               # Iniciar em produção
npm run prisma:generate     # Gerar cliente Prisma
npm run prisma:migrate      # Executar migrations
npm run prisma:studio       # Abrir Prisma Studio
npm run prisma:seed         # Popular banco de dados
```

### Frontend
```bash
npm run dev                 # Iniciar dev server
npm run build               # Build para produção
npm run preview             # Preview do build
```

---

## 📄 Licença

MIT - Projeto acadêmico para fins educacionais

---

## 👨‍💻 Autor

**Thales Filho**  
Projeto prático - Desenvolvimento de Sistemas WEB (DSW)  
UNASP - Universidade Adventista de São Paulo

---

## 📞 Suporte

Para dúvidas ou problemas:
- 📧 contato@hamburgueriathales.com
- 📱 (11) 9999-9999

---

**Versão**: 1.0.0  
**Data**: 2024  
**Status**: ✅ Completo e Funcional

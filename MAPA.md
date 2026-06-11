# 📂 MAPA DE ARQUIVOS E ESTRUTURA

## 🎯 Visão Geral Completa do Projeto

```
Teste av1/
│
├── 📖 README.md                 ← Documentação Principal
├── ⚡ QUICKSTART.md            ← Início rápido (5 min)
├── 📦 INSTALACAO.md            ← Guia de instalação detalhado
├── 🏗️ ARQUITETURA.md           ← Explicação técnica
├── 📂 MAPA.md                  ← Este arquivo
├── .gitignore                  ← Ignorar no Git
│
├── 📁 backend/
│   ├── 📖 README.md            ← Docs do Backend
│   ├── 📄 package.json         ← Dependências
│   ├── .env                    ← Variáveis de ambiente
│   ├── .env.example            ← Exemplo de .env
│   ├── .gitignore
│   │
│   ├── 📁 src/
│   │   ├── 📄 server.js        ← Entrada da aplicação
│   │   ├── 📄 app.js           ← Configuração Express
│   │   │
│   │   ├── 📁 config/
│   │   │   └── 📄 prisma.js    ← Instância Prisma
│   │   │
│   │   ├── 📁 models/
│   │   │   └── 📄 SnackModel.js
│   │   │       ├─ findAll()
│   │   │       ├─ findById()
│   │   │       ├─ findByCategory()
│   │   │       ├─ searchByName()
│   │   │       ├─ create()
│   │   │       ├─ update()
│   │   │       └─ delete()
│   │   │
│   │   ├── 📁 controllers/
│   │   │   └── 📄 SnackController.js
│   │   │       ├─ getAllSnacks()
│   │   │       ├─ getSnackById()
│   │   │       ├─ createSnack()
│   │   │       ├─ updateSnack()
│   │   │       ├─ deleteSnack()
│   │   │       ├─ getSnacksByCategory()
│   │   │       └─ searchSnacks()
│   │   │
│   │   ├── 📁 routes/
│   │   │   └── 📄 SnackRoutes.js
│   │   │       GET    /snacks
│   │   │       GET    /snacks/:id
│   │   │       POST   /snacks
│   │   │       PUT    /snacks/:id
│   │   │       DELETE /snacks/:id
│   │   │       GET    /snacks/category/:categoria
│   │   │       GET    /snacks/search/:nome
│   │   │
│   │   └── 📁 middlewares/
│   │       └── 📄 errorHandler.js
│   │
│   └── 📁 prisma/
│       ├── 📄 schema.prisma
│       │   └─ Model: Snack
│       └── 📄 seed.js
│           └─ 14 lanches pré-carregados
│
├── 📁 frontend/
│   ├── 📖 README.md            ← Docs do Frontend
│   ├── 📄 package.json         ← Dependências
│   ├── 📄 index.html           ← HTML principal
│   ├── 📄 vite.config.js       ← Configuração Vite
│   ├── 📄 tailwind.config.js   ← Configuração Tailwind
│   ├── 📄 postcss.config.js    ← Configuração PostCSS
│   ├── .env.example            ← Exemplo de .env
│   ├── .gitignore
│   │
│   └── 📁 src/
│       ├── 📄 App.jsx          ← Componente principal (Router)
│       ├── 📄 main.jsx         ← Entry point React
│       ├── 📄 index.css        ← Estilos globais + Tailwind
│       │
│       ├── 📁 components/
│       │   ├── 📄 Header.jsx
│       │   │   └─ Logo e navegação
│       │   ├── 📄 Footer.jsx
│       │   │   └─ Rodapé com links
│       │   ├── 📄 SnackCard.jsx
│       │   │   └─ Card individual do lanche
│       │   ├── 📄 SnackForm.jsx
│       │   │   └─ Formulário create/edit
│       │   ├── 📄 SnackTable.jsx
│       │   │   └─ Grid de cards
│       │   ├── 📄 SearchBar.jsx
│       │   │   └─ Busca + filtro
│       │   ├── 📄 ModalDelete.jsx
│       │   │   └─ Modal confirmação
│       │   ├── 📄 Loading.jsx
│       │   │   └─ Spinner
│       │   └── 📄 ErrorMessage.jsx
│       │       └─ Toast de erro
│       │
│       ├── 📁 pages/
│       │   ├── 📄 HomePage.jsx
│       │   │   └─ Dashboard principal
│       │   ├── 📄 SnackListPage.jsx
│       │   │   └─ Lista completa de lanches
│       │   ├── 📄 CreateSnackPage.jsx
│       │   │   └─ Tela de criação
│       │   ├── 📄 EditSnackPage.jsx
│       │   │   └─ Tela de edição
│       │   ├── 📄 SnackDetailsPage.jsx
│       │   │   └─ Detalhes completos
│       │   └── 📄 NotFoundPage.jsx
│       │       └─ Página 404
│       │
│       ├── 📁 services/
│       │   └── 📄 api.js
│       │       ├─ Configuração Axios
│       │       └─ snackService com CRUD
│       │
│       └── 📁 assets/
│           └─ (Pasta para imagens/arquivos)
```

---

## 📋 Documentos de Referência

| Arquivo | Descrição | Para Quem |
|---------|-----------|----------|
| [README.md](README.md) | Visão geral completa | Todos |
| [QUICKSTART.md](QUICKSTART.md) | Início em 5 minutos | Iniciantes |
| [INSTALACAO.md](INSTALACAO.md) | Passo a passo detalhado | Passo a passo |
| [ARQUITETURA.md](ARQUITETURA.md) | Design técnico | Desenvolvedores |
| [backend/README.md](backend/README.md) | API documentation | Backend |
| [frontend/README.md](frontend/README.md) | Interface & componentes | Frontend |

---

## 🚀 Arquivos Importantes

### Backend

**Entrada da Aplicação**
- `backend/src/server.js` - Inicializa Express

**Configuração**
- `backend/.env` - Variáveis de ambiente
- `backend/prisma/schema.prisma` - Schema do banco

**Lógica**
- `backend/src/models/SnackModel.js` - Queries ao banco
- `backend/src/controllers/SnackController.js` - Lógica de negócio
- `backend/src/routes/SnackRoutes.js` - Definição de endpoints

### Frontend

**Entrada da Aplicação**
- `frontend/src/main.jsx` - Renderiza React
- `frontend/src/App.jsx` - Router da SPA

**Páginas**
- `frontend/src/pages/HomePage.jsx` - Home
- `frontend/src/pages/SnackListPage.jsx` - Listagem
- `frontend/src/pages/CreateSnackPage.jsx` - Criar
- `frontend/src/pages/EditSnackPage.jsx` - Editar

**Componentes Reutilizáveis**
- `frontend/src/components/SnackCard.jsx` - Card
- `frontend/src/components/SnackForm.jsx` - Formulário
- `frontend/src/components/SearchBar.jsx` - Busca

**Serviços**
- `frontend/src/services/api.js` - Chamadas HTTP

---

## 🎯 Como Usar Este Projeto

### Para Começar
1. Leia [QUICKSTART.md](QUICKSTART.md)
2. Execute os comandos
3. Acesse http://localhost:5173

### Para Entender
1. Leia [README.md](README.md)
2. Leia [ARQUITETURA.md](ARQUITETURA.md)
3. Explore o código

### Para Instalar Corretamente
1. Siga [INSTALACAO.md](INSTALACAO.md)
2. Não pule nenhum passo
3. Teste cada etapa

### Para Debugar
1. Verifique Console do Browser (F12)
2. Verifique Terminal do Node.js
3. Use Prisma Studio: `npm run prisma:studio`

---

## 📊 Estatísticas do Projeto

### Backend
- **Arquivos**: 7
- **Linhas de código**: ~500
- **Endpoints**: 7
- **Models**: 1 (Snack)

### Frontend
- **Arquivos**: 20+
- **Componentes**: 9
- **Páginas**: 6
- **Serviços**: 1

### Total
- **Arquivos criados**: 50+
- **Linhas de código**: 2000+
- **Funcionalidades**: 6 (CRUD + Busca + Filtro)

---

## 🔗 Fluxo de Uso

```
Usuario
  ├─→ HomePage (dashboard)
  ├─→ SnackListPage (lista completa)
  │   ├─→ SnackDetailsPage (ver detalhes)
  │   ├─→ CreateSnackPage (novo lanche)
  │   ├─→ EditSnackPage (editar lanche)
  │   └─→ DeleteConfirm (deletar lanche)
  └─→ NotFoundPage (404)

Cada página usa:
  ├─→ Components (Header, Footer, etc)
  ├─→ Services (api.js com Axios)
  └─→ Estado (React hooks)

Backend recebe:
  ├─→ Routes (SnackRoutes.js)
  ├─→ Controllers (lógica)
  └─→ Models (banco dados)
```

---

## 💾 Banco de Dados

### Tabela: snacks
- **Campos**: 11
- **Índices**: 2 (categoria, disponivel)
- **Registros iniciais**: 14 lanches

### Categorias Suportadas
22 categorias diferentes incluindo:
- Hambúrgueres (Tradicional, Artesanal, etc)
- X-lanches (X-Bacon, X-Egg, X-Tudo, etc)
- Sanduíches (Natural, Presunto, Peito Peru)
- Especiais (Smash, Misto Quente, Beirute, Wrap)

---

## 🎓 Para Fins Acadêmicos

Este projeto atende todos os requisitos:

✅ **Backend**: Node.js + Express + Prisma + MySQL  
✅ **Frontend**: React + Vite + Tailwind  
✅ **Arquitetura**: MVC + REST  
✅ **CRUD**: Completo  
✅ **Validações**: Presente  
✅ **Documentação**: Extensiva  
✅ **Design**: Profissional  

Pronto para apresentação! 📊

---

## 🚀 Próximas Etapas

1. **Instalar**: Siga [INSTALACAO.md](INSTALACAO.md)
2. **Testar**: Acesse http://localhost:5173
3. **Explorar**: Clique em cada funcionalidade
4. **Modificar**: Customize conforme necessário
5. **Apresentar**: Mostre para professor/turma

---

## 📞 Referência Rápida

| Comando | Local | Efeito |
|---------|-------|--------|
| `npm install` | backend/ ou frontend/ | Instala dependências |
| `npm run dev` | backend/ | Backend na porta 3000 |
| `npm run dev` | frontend/ | Frontend na porta 5173 |
| `npm run prisma:generate` | backend/ | Gera cliente Prisma |
| `npm run prisma:migrate` | backend/ | Executa migrations |
| `npm run prisma:seed` | backend/ | Popula banco com dados |
| `npm run prisma:studio` | backend/ | Interface visual do banco |
| `npm run build` | frontend/ | Build otimizado |

---

## ✅ Checklist de Implementação

```
[✅] Estrutura de pastas
[✅] Backend com Express
[✅] Prisma + MySQL
[✅] Controllers e Models
[✅] Routes e endpoints
[✅] Frontend com React
[✅] Vite configurado
[✅] Tailwind CSS
[✅] Componentes reutilizáveis
[✅] Páginas completas
[✅] Roteamento
[✅] Axios services
[✅] CRUD funcionando
[✅] Busca e filtro
[✅] Validações
[✅] Tratamento de erros
[✅] Loading states
[✅] Design responsivo
[✅] 14 lanches de exemplo
[✅] README completo
[✅] Documentação extensiva
```

---

Projeto completo e pronto para uso! 🎉

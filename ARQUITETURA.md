# 🏗️ ARQUITETURA - Hamburgueria Thales

## 📐 Visão Geral da Arquitetura

```
┌─────────────────────────────────────────────────────────┐
│                    FRONTEND (React + Vite)              │
│  ┌──────────────────────────────────────────────────┐  │
│  │  Pages (HomePage, SnackListPage, etc)           │  │
│  │  ├─ Components (Header, Footer, Cards, Form)    │  │
│  │  ├─ Services (api.js com Axios)                 │  │
│  │  └─ Routing (React Router v6)                   │  │
│  │                                                   │  │
│  │  Styling: Tailwind CSS (Utility-first)          │  │
│  │  Build: Vite (Ultra-rápido)                     │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
                          ↕ HTTP/REST
                        Axios + API
┌─────────────────────────────────────────────────────────┐
│                  BACKEND (Node.js + Express)            │
│  ┌──────────────────────────────────────────────────┐  │
│  │  Routes (SnackRoutes.js)                         │  │
│  │  ├─ Controllers (SnackController.js)            │  │
│  │  ├─ Models (SnackModel.js)                      │  │
│  │  └─ Middlewares (errorHandler.js)               │  │
│  │                                                   │  │
│  │  ORM: Prisma (Type-safe queries)                │  │
│  │  Patterns: MVC + REST                           │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
                          ↕ SQL
┌─────────────────────────────────────────────────────────┐
│              DATABASE (MySQL + Prisma Migrations)       │
│  ┌──────────────────────────────────────────────────┐  │
│  │  Table: snacks                                   │  │
│  │  Columns: id, nome, categoria, descricao, ...  │  │
│  │  Indexes: categoria, disponivel                │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

---

## 🎯 Padrão MVC (Model-View-Controller)

### Models
**Arquivo**: `backend/src/models/SnackModel.js`

Responsabilidade: Interação direta com o banco de dados
- CRUD operations
- Queries personalizadas
- Validações de negócio de baixo nível

```javascript
// Exemplo
static async findAll() {
  return await prisma.snack.findMany({...});
}
```

### Controllers
**Arquivo**: `backend/src/controllers/SnackController.js`

Responsabilidade: Lógica de negócio
- Validação de dados de entrada
- Processamento de requisições
- Coordenação de chamadas ao Model
- Resposta com status apropriado

```javascript
// Exemplo
static async getAllSnacks(req, res) {
  const snacks = await SnackModel.findAll();
  return res.status(200).json({...});
}
```

### Views (Frontend)
**Pasta**: `frontend/src/`

Responsabilidade: Interface do usuário
- Páginas (Pages)
- Componentes (Components)
- Serviços HTTP (Services)

```
Pages/          → Páginas completas
  ├─ HomePage
  └─ SnackListPage
Components/     → Componentes reutilizáveis
  ├─ Header
  └─ SnackCard
Services/       → Chamadas HTTP
  └─ api.js
```

---

## 🔄 Fluxo de Dados

### 1. User Interaction → Frontend → Backend

```
Usuario clica em "Criar Lanche"
         ↓
CreateSnackPage renderiza
         ↓
Usuario preenche SnackForm
         ↓
Clica em "Salvar"
         ↓
handleSubmit() chamado
         ↓
snackService.create(formData)
         ↓
Axios POST para http://localhost:3000/api/snacks
         ↓
```

### 2. Backend → Database → Response

```
Express recebe POST /api/snacks
         ↓
SnackController.createSnack()
         ↓
Valida dados de entrada
         ↓
SnackModel.create(data)
         ↓
Prisma executa INSERT
         ↓
MySQL salva dados
         ↓
Prisma retorna objeto criado
         ↓
Controller retorna JSON com status 201
         ↓
```

### 3. Response → Frontend → UI Update

```
Axios recebe response 201
         ↓
navigate('/lanches')
         ↓
SnackListPage renderiza
         ↓
useEffect carrega nova lista
         ↓
snackService.getAll()
         ↓
Dados carregam
         ↓
UI renderiza com novo lanche
         ↓
```

---

## 📋 Estrutura de Dados

### Model Prisma
```prisma
model Snack {
  id          Int       @id @default(autoincrement())
  nome        String    @db.VarChar(255)
  categoria   String    @db.VarChar(100)
  descricao   String    @db.Text
  ingredientes String   @db.Text
  preco       Float
  imagem      String?   @db.VarChar(500)
  calorias    Int
  disponivel  Boolean   @default(true)
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt

  @@index([categoria])
  @@index([disponivel])
  @@map("snacks")
}
```

### Request/Response Format

**Request (POST /snacks)**
```json
{
  "nome": "X-Bacon",
  "categoria": "X-Bacon",
  "descricao": "Com bacon crocante",
  "ingredientes": "Pão, carne, bacon",
  "preco": 32.90,
  "imagem": "https://...",
  "calorias": 850,
  "disponivel": true
}
```

**Response (201 Created)**
```json
{
  "success": true,
  "data": {
    "id": 15,
    "nome": "X-Bacon",
    "categoria": "X-Bacon",
    "descricao": "Com bacon crocante",
    "ingredientes": "Pão, carne, bacon",
    "preco": 32.90,
    "imagem": "https://...",
    "calorias": 850,
    "disponivel": true,
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  },
  "message": "Lanche criado com sucesso"
}
```

---

## 🔗 Rotas & Endpoints

### Frontend Routes
| Rota | Componente | Ação |
|------|-----------|------|
| `/` | HomePage | Dashboard |
| `/lanches` | SnackListPage | Listar todos |
| `/novo-lanche` | CreateSnackPage | Criar |
| `/editar-lanche/:id` | EditSnackPage | Editar |
| `/lanche/:id` | SnackDetailsPage | Ver detalhes |
| `*` | NotFoundPage | 404 |

### Backend Endpoints
| Método | Rota | Ação |
|--------|------|------|
| GET | `/api/snacks` | Listar |
| GET | `/api/snacks/:id` | Obter um |
| GET | `/api/snacks/category/:cat` | Filtrar |
| GET | `/api/snacks/search/:nome` | Pesquisar |
| POST | `/api/snacks` | Criar |
| PUT | `/api/snacks/:id` | Atualizar |
| DELETE | `/api/snacks/:id` | Deletar |

---

## 🏗️ Componentes Frontend

### Estrutura de Componentes

```
App
├── Header
├── Router
│   ├── HomePage
│   ├── SnackListPage
│   │   ├── SearchBar
│   │   ├── SnackTable
│   │   │   └── SnackCard (n)
│   │   └── ModalDelete
│   ├── CreateSnackPage
│   │   └── SnackForm
│   ├── EditSnackPage
│   │   └── SnackForm
│   ├── SnackDetailsPage
│   └── NotFoundPage
└── Footer
```

### Componentes Reutilizáveis

**SnackCard**
- Props: snack, onEdit, onDelete, onView
- Renderiza: Card do lanche com imagem e ações

**SnackForm**
- Props: initialData, onSubmit, isLoading
- Renderiza: Formulário completo

**SnackTable**
- Props: snacks, onEdit, onDelete, onView
- Renderiza: Grid de cards

**SearchBar**
- Props: onSearch, onFilter, categorias
- Renderiza: Input de busca + select de filtro

---

## 🔐 Segurança

### Backend
- ✅ Validação de entrada em Controllers
- ✅ Prisma previne SQL Injection
- ✅ CORS habilitado
- ✅ Error handling centralizado
- ✅ Environment variables para secrets

### Frontend
- ✅ Validação de formulários
- ✅ XSS prevention (React escapa)
- ✅ HTTPS ready
- ✅ Error boundaries (modal)

---

## 🧪 Estados da Aplicação

### Loading States
- `isLoading` em requisições
- Component `<Loading />` exibido
- Botões desabilitados

### Error States
- Try/catch em todas as async functions
- Component `<ErrorMessage />` exibido
- Error log no console
- Usuário informado

### Success States
- Toast/alert implícito via navegação
- Redirecionamento apropriado
- Lista atualizada

---

## 🚀 Performance

### Frontend
- Vite: Build ultra-rápido
- Code splitting automático
- Hot Module Replacement (HMR)
- Tailwind: CSS otimizado

### Backend
- Prisma: Queries otimizadas
- Índices no banco (categoria, disponivel)
- CORS middleware leve
- Error handling eficiente

### Database
- Índices estratégicos
- Foreign keys preparados
- Migrations com Prisma

---

## 📦 Dependências Críticas

### Backend
```
@prisma/client   → ORM Type-safe
express          → Framework web
cors             → Cross-origin requests
dotenv           → Variáveis de ambiente
```

### Frontend
```
react            → UI library
react-dom        → React renderer
react-router-dom → Roteamento SPA
axios            → HTTP client
tailwindcss      → Styling
vite             → Build tool
```

---

## 🔄 Ciclo de Desenvolvimento

### Backend
1. Editar arquivo em `src/`
2. Node.js reinicia automaticamente (`--watch`)
3. Testar em Postman/curl
4. API atualizada

### Frontend
1. Editar arquivo em `src/`
2. Vite recarrega hot (HMR)
3. Navegador atualiza automático
4. UI atualizada

---

## 🎓 Padrões de Design Usados

### Arquiteturais
- **MVC**: Separação de concerns
- **REST**: API Stateless
- **SPA**: Single Page Application
- **Component-based**: React

### De Código
- **DRY**: Don't Repeat Yourself
- **SOLID**: Quando aplicável
- **Error Handling**: Centralizado
- **Validation**: Em múltiplas camadas

---

## 🧩 Extensibilidade

### Adicionar Nova Entidade

1. **Banco**: Adicionar model em `schema.prisma`
2. **Backend**: Criar Model, Controller, Routes
3. **Frontend**: Criar Pages e Components
4. **API**: Adicionar endpoints

Exemplo: Se fosse adicionar "Categorias" como entidade...

```javascript
// 1. schema.prisma
model Category {
  id    Int     @id @default(autoincrement())
  nome  String  @unique
  snacks Snack[]
}

// 2. CategoryModel.js
class CategoryModel {
  static async findAll() { ... }
}

// 3. CategoryController.js
class CategoryController {
  static async getAllCategories(req, res) { ... }
}

// 4. CategoryRoutes.js
router.get('/categories', CategoryController.getAllCategories);
```

---

## 📊 Diagrama de Classe

```
┌─────────────────────┐
│      Snack          │
├─────────────────────┤
│ - id: Int           │
│ - nome: String      │
│ - categoria: String │
│ - descricao: Text   │
│ - preco: Float      │
│ - calorias: Int     │
│ - disponivel: Bool  │
├─────────────────────┤
│ + findAll()         │
│ + findById(id)      │
│ + create(data)      │
│ + update(id, data)  │
│ + delete(id)        │
└─────────────────────┘
```

---

## 📄 Conclusão

A arquitetura de **Hamburgueria Thales** segue os melhores padrões:

✅ **Clean Code** - Código legível e manutenível  
✅ **Separation of Concerns** - Cada parte tem uma responsabilidade  
✅ **DRY Principle** - Sem repetição desnecessária  
✅ **Scalability** - Fácil adicionar novos features  
✅ **Security** - Validações em múltiplas camadas  
✅ **Performance** - Otimizações em frontend e backend  

Pronta para fins acadêmicos e profissionais! 🎓

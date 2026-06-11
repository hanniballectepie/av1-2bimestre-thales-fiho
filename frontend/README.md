# 🍔 Hamburgueria Thales - Frontend

Interface moderna e responsiva para gerenciamento de hamburgueria com React + Vite + Tailwind CSS.

## 🎯 Overview

Frontend desenvolvido com React 18 + Vite, oferecendo experiência de usuário completa e profissional.

**Status**: ✅ Pronto para uso

---

## 🚀 Quick Start

### 1. Instalar dependências
```bash
npm install
```

### 2. Iniciar desenvolvimento
```bash
npm run dev
```

Aplicação rodará em: `http://localhost:5173`

---

## 📁 Estrutura

```
frontend/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Cabeçalho da aplicação
│   │   ├── Footer.jsx          # Rodapé
│   │   ├── SnackCard.jsx       # Card do lanche
│   │   ├── SnackForm.jsx       # Formulário CRUD
│   │   ├── SnackTable.jsx      # Grid de lanches
│   │   ├── SearchBar.jsx       # Busca e filtro
│   │   ├── ModalDelete.jsx     # Modal de confirmação
│   │   ├── Loading.jsx         # Spinner de carregamento
│   │   └── ErrorMessage.jsx    # Mensagem de erro
│   ├── pages/
│   │   ├── HomePage.jsx        # Dashboard
│   │   ├── SnackListPage.jsx   # Lista de lanches
│   │   ├── CreateSnackPage.jsx # Criar lanche
│   │   ├── EditSnackPage.jsx   # Editar lanche
│   │   ├── SnackDetailsPage.jsx # Detalhes
│   │   └── NotFoundPage.jsx    # Página 404
│   ├── services/
│   │   └── api.js              # Chamadas HTTP com Axios
│   ├── index.css               # Estilos globais + Tailwind
│   ├── App.jsx                 # Router principal
│   └── main.jsx                # Entrada da aplicação
├── index.html                  # HTML principal
├── vite.config.js              # Configuração Vite
├── tailwind.config.js          # Configuração Tailwind
└── package.json
```

---

## 📄 Páginas

### Home Page (/)
- Dashboard com estatísticas
- Total de lanches
- Produtos disponíveis
- Número de categorias
- Botões de ação rápida

### Catálogo (/lanches)
- Grid responsivo de lanches
- Filtro por categoria
- Busca por nome
- Cards com informações
- Ações: Ver, Editar, Deletar

### Criar Lanche (/novo-lanche)
- Formulário completo
- Seleção de categoria (22 opções)
- Upload de imagem
- Validação de campos
- Feedback visual

### Editar Lanche (/editar-lanche/:id)
- Formulário pré-preenchido
- Atualização de dados
- Validação
- Cancelamento com segurança

### Detalhes (/lanche/:id)
- Visualização completa
- Imagem em destaque
- Lista de ingredientes
- Preço e calorias
- Status de disponibilidade
- Datas de criação

### 404 Page
- Página customizada para rotas não encontradas
- Redirecionamento para home

---

## 🎨 Design System

### Cores
```
Dark:   #1A1A1A
Orange: #FF6B00
Amber:  #FFC107
White:  #FFFFFF
```

### Componentes Reutilizáveis

**Buttons**
- `.btn-primary` - Laranja principal
- `.btn-secondary` - Cinza
- `.btn-danger` - Vermelho
- `.btn-sm` - Tamanho pequeno

**Cards**
- `.card` - Container padrão com sombra

**Inputs**
- `.input-field` - Input padronizado

---

## 🛠️ Tecnologias

- **React 18** - UI library
- **Vite** - Build tool ultra-rápido
- **React Router** - Roteamento
- **Axios** - HTTP client
- **Tailwind CSS** - Utility-first CSS
- **PostCSS** - CSS processing

---

## 📦 Dependências

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "axios": "^1.5.0",
  "react-router-dom": "^6.15.0",
  "tailwindcss": "^3.3.0"
}
```

---

## 🚀 Build & Deploy

### Build para produção
```bash
npm run build
```

Cria pasta `dist/` com arquivos otimizados.

### Preview do build
```bash
npm run preview
```

---

## 📱 Responsividade

A aplicação é totalmente responsiva:

- **Mobile** (320px+): Layout em coluna única
- **Tablet** (768px+): 2 colunas
- **Desktop** (1024px+): 3 colunas

---

## 🔌 Integração com API

### Arquivo: services/api.js

```javascript
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const snackService = {
  getAll: () => api.get('/snacks'),
  getById: (id) => api.get(`/snacks/${id}`),
  getByCategory: (cat) => api.get(`/snacks/category/${cat}`),
  search: (nome) => api.get(`/snacks/search/${nome}`),
  create: (data) => api.post('/snacks', data),
  update: (id, data) => api.put(`/snacks/${id}`, data),
  delete: (id) => api.delete(`/snacks/${id}`),
};
```

---

## 🎯 Funcionalidades

✅ **CRUD Completo**
- Listar lanches
- Visualizar detalhes
- Criar novo lanche
- Editar lanche existente
- Deletar com confirmação

✅ **Busca e Filtro**
- Pesquisar por nome (case-insensitive)
- Filtrar por categoria
- Limpar filtros

✅ **UX/UI**
- Loading states
- Mensagens de erro
- Modal de confirmação
- Validação de formulários
- Feedback visual

✅ **Design**
- Responsivo
- Moderno e profissional
- Acessível
- Navegação intuitiva

---

## 🧩 Componentes

### Header
Navigation com logo e links rápidos

### Footer
Informações e links adicionais

### SnackCard
Exibe lanche em card com imagem, preço, calorias

### SnackForm
Formulário reutilizável para criar e editar

### SnackTable (Grid)
Grid responsivo de SnackCards

### SearchBar
Busca e filtro por categoria

### ModalDelete
Modal de confirmação antes de deletar

### Loading
Spinner de carregamento

### ErrorMessage
Notificação de erro com dismiss

---

## 🔗 Rotas

| Rota | Componente | Descrição |
|------|-----------|-----------|
| `/` | HomePage | Dashboard |
| `/lanches` | SnackListPage | Lista completa |
| `/novo-lanche` | CreateSnackPage | Criar |
| `/editar-lanche/:id` | EditSnackPage | Editar |
| `/lanche/:id` | SnackDetailsPage | Detalhes |
| `*` | NotFoundPage | 404 |

---

## 🐛 Troubleshooting

### Erro: "Cannot GET /api/..."
- Backend não está rodando
- Verifique se está em http://localhost:3000
- Verifique a URL no services/api.js

### Erro: "CORS error"
- Backend precisa ter CORS ativado
- Verifique if app.use(cors()) em app.js

### Porta 5173 já em uso
```bash
# Usar outra porta
npm run dev -- --port 3001
```

### Imagens não carregam
- Use URLs HTTPS válidas
- Verifique o URL da imagem

---

## 🚨 Estados de Erro

A aplicação trata:
- Erros de conexão
- Erros de validação
- Erros 404
- Erros 500
- Timeouts

---

## ✨ Features Adicionais

- 🔐 Validação de entrada
- 📱 Mobile-first design
- ♿ Acessibilidade básica
- 🎯 Navegação clara
- 💫 Transições suaves
- 📊 Feedback visual completo
- 🎨 Design system consistente

---

## 📚 Exemplos de Uso

### Criar um novo lanche
1. Clique em "Novo Lanche"
2. Preencha o formulário
3. Clique em "Salvar"

### Editar um lanche
1. Acesse a lista de lanches
2. Clique no botão "Editar"
3. Modifique os dados
4. Clique em "Salvar"

### Deletar um lanche
1. Clique no botão "Del"
2. Confirme na modal
3. Lanche será removido

### Pesquisar
1. Digite o nome no campo de busca
2. Clique em "Buscar"

### Filtrar
1. Selecione a categoria
2. Lista será atualizada automaticamente

---

## 📄 Licença

MIT - Projeto acadêmico

---

## 👨‍💻 Autor

**Thales Filho**

**Versão**: 1.0.0

# 🎯 REFERÊNCIA RÁPIDA

## ⚡ Comandos Essenciais

### Backend - Instalação
```bash
cd backend
npm install
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed
```

### Backend - Execução
```bash
npm run dev           # Dev com hot-reload
npm run start         # Produção
npm run prisma:studio # Interface visual do banco
```

### Frontend - Instalação
```bash
cd frontend
npm install
```

### Frontend - Execução
```bash
npm run dev       # Dev server
npm run build     # Otimizar para produção
npm run preview   # Ver build
```

---

## 🌐 URLs Principais

| Recurso | URL |
|---------|-----|
| Frontend | http://localhost:5173 |
| Backend | http://localhost:3000 |
| API Base | http://localhost:3000/api |
| Health Check | http://localhost:3000/health |

---

## 📡 Endpoints Rápido

```bash
# Listar todos
GET http://localhost:3000/api/snacks

# Obter um
GET http://localhost:3000/api/snacks/1

# Criar
POST http://localhost:3000/api/snacks
Content-Type: application/json
{
  "nome": "X-Bacon",
  "categoria": "X-Bacon",
  "descricao": "Com bacon",
  "ingredientes": "Pão, carne, bacon",
  "preco": 32.90,
  "calorias": 850,
  "disponivel": true
}

# Atualizar
PUT http://localhost:3000/api/snacks/1
{...mesmos campos...}

# Deletar
DELETE http://localhost:3000/api/snacks/1

# Filtrar por categoria
GET http://localhost:3000/api/snacks/category/X-Bacon

# Pesquisar
GET http://localhost:3000/api/snacks/search/bacon
```

---

## 🗂️ Estrutura em Uma Linha

```
backend/src/ → config/ + controllers/ + models/ + routes/ + middlewares/
frontend/src/ → pages/ + components/ + services/
```

---

## 🎨 Cores do Design

```
Dark Orange:  #1A1A1A
Vibrant Orange: #FF6B00
Golden Amber: #FFC107
White:        #FFFFFF
```

---

## 🧪 Checklist Rápido

- [ ] Node.js instalado
- [ ] MySQL rodando
- [ ] banco `hamburgueria_db` criado
- [ ] `npm install` em backend/
- [ ] `npm install` em frontend/
- [ ] Prisma migrations executadas
- [ ] Backend rodando porta 3000
- [ ] Frontend rodando porta 5173
- [ ] 14 lanches carregados no banco
- [ ] Página abre sem erros
- [ ] Pode criar/editar/deletar lanches

---

## 📚 Documentação por Tipo

| Tipo | Arquivo |
|------|---------|
| Visão Geral | README.md |
| Início Rápido | QUICKSTART.md |
| Instalação | INSTALACAO.md |
| Arquitetura | ARQUITETURA.md |
| Mapa de Arquivos | MAPA.md |
| Checklist | CHECKLIST.md |
| Backend Docs | backend/README.md |
| Frontend Docs | frontend/README.md |

---

## 🐛 Erro Comum? Solução Rápida

| Erro | Solução |
|------|---------|
| Cannot connect to DB | Verificar MySQL + .env |
| Port 3000 in use | Mudar PORT no .env |
| CORS error | Backend deve estar em :3000 |
| Module not found | npm install |
| 404 em /api/... | Backend não está rodando |

---

## 📱 Responsividade

- **Mobile**: 320px+
- **Tablet**: 768px+
- **Desktop**: 1024px+

---

## 🔑 Variáveis de Ambiente

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

## 📦 Stack Resumido

| Camada | Tecnologia |
|--------|-----------|
| Banco | MySQL |
| ORM | Prisma |
| Server | Node.js + Express |
| Frontend | React 18 |
| Build | Vite |
| CSS | Tailwind |
| HTTP | Axios |

---

## 🎯 Funcionalidades Principais

1. **Listar** - Ver todos os lanches
2. **Criar** - Adicionar novo lanche
3. **Editar** - Modificar lanche
4. **Deletar** - Remover lanche
5. **Buscar** - Pesquisar por nome
6. **Filtrar** - Por categoria

---

## 🚀 Passo 1-2-3

```bash
# 1. Instalar
npm install (em backend/ e frontend/)

# 2. Rodar
npm run dev (em backend/)
npm run dev (em frontend/)

# 3. Usar
http://localhost:5173
```

---

## ✅ Tudo Pronto?

- Backend: http://localhost:3000 ✅
- Frontend: http://localhost:5173 ✅
- Banco: 14 lanches ✅
- API: 7 endpoints ✅
- UI: 6 páginas ✅

**Boa sorte!** 🎉

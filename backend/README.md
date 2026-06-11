# 🍔 Hamburgueria Thales - Backend

API REST completa para gerenciamento de hamburgueria e lanches frios.

## 🎯 Overview

Backend desenvolvido com Node.js + Express + Prisma ORM + MySQL, seguindo padrão MVC.

**Status**: ✅ Pronto para uso

---

## 🚀 Quick Start

### 1. Instalar dependências
```bash
npm install
```

### 2. Configurar variáveis de ambiente
```bash
# Copie o arquivo .env.example para .env
cp .env.example .env

# Edite o .env com suas credenciais MySQL:
DATABASE_URL="mysql://root:password@localhost:3306/hamburgueria_db"
NODE_ENV="development"
PORT=3000
```

### 3. Setup do Prisma
```bash
# Gerar cliente Prisma
npm run prisma:generate

# Executar migrations (criar tabelas)
npm run prisma:migrate

# Popular banco de dados com dados de exemplo
npm run prisma:seed
```

### 4. Iniciar servidor
```bash
npm run dev
```

Servidor rodará em: `http://localhost:3000`

---

## 📁 Estrutura

```
backend/
├── src/
│   ├── config/
│   │   └── prisma.js          # Instância do Prisma
│   ├── controllers/
│   │   └── SnackController.js  # Lógica de negócio
│   ├── models/
│   │   └── SnackModel.js       # Interação com BD
│   ├── routes/
│   │   └── SnackRoutes.js      # Definição de rotas
│   ├── middlewares/
│   │   └── errorHandler.js     # Tratamento de erros
│   ├── app.js                  # Configuração Express
│   └── server.js               # Entrada da aplicação
├── prisma/
│   ├── schema.prisma           # Schema do banco
│   └── seed.js                 # Script de população
└── package.json
```

---

## 📡 API Endpoints

### GET /api/snacks
Lista todos os lanches
```bash
curl http://localhost:3000/api/snacks
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "nome": "X-Bacon Especial",
      "categoria": "X-Bacon",
      "descricao": "Hambúrguer bovino artesanal com cheddar e bacon crocante",
      "ingredientes": "Pão brioche, hambúrguer, cheddar, bacon, molho especial",
      "preco": 32.90,
      "imagem": "https://...",
      "calorias": 850,
      "disponivel": true,
      "createdAt": "2024-01-01T10:00:00.000Z",
      "updatedAt": "2024-01-01T10:00:00.000Z"
    }
  ],
  "message": "Lanches recuperados com sucesso"
}
```

### GET /api/snacks/:id
Obter lanche por ID
```bash
curl http://localhost:3000/api/snacks/1
```

### POST /api/snacks
Criar novo lanche
```bash
curl -X POST http://localhost:3000/api/snacks \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "X-Bacon Especial",
    "categoria": "X-Bacon",
    "descricao": "Hambúrguer com bacon crocante",
    "ingredientes": "Pão, carne, bacon, queijo",
    "preco": 32.90,
    "imagem": "https://example.com/image.jpg",
    "calorias": 850,
    "disponivel": true
  }'
```

### PUT /api/snacks/:id
Atualizar lanche
```bash
curl -X PUT http://localhost:3000/api/snacks/1 \
  -H "Content-Type: application/json" \
  -d '{...dados...}'
```

### DELETE /api/snacks/:id
Deletar lanche
```bash
curl -X DELETE http://localhost:3000/api/snacks/1
```

### GET /api/snacks/category/:categoria
Filtrar por categoria
```bash
curl "http://localhost:3000/api/snacks/category/X-Bacon"
```

### GET /api/snacks/search/:nome
Pesquisar por nome
```bash
curl "http://localhost:3000/api/snacks/search/bacon"
```

### GET /health
Health check
```bash
curl http://localhost:3000/health
```

---

## 💾 Banco de Dados

### Schema Prisma
```prisma
model Snack {
  id          Int     @id @default(autoincrement())
  nome        String  @db.VarChar(255)
  categoria   String  @db.VarChar(100)
  descricao   String  @db.Text
  ingredientes String @db.Text
  preco       Float
  imagem      String? @db.VarChar(500)
  calorias    Int
  disponivel  Boolean @default(true)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@index([categoria])
  @@index([disponivel])
  @@map("snacks")
}
```

### Criar banco MySQL

```sql
CREATE DATABASE hamburgueria_db;
USE hamburgueria_db;
```

### Comandos Prisma úteis

```bash
# Gerar cliente
npm run prisma:generate

# Executar migrations
npm run prisma:migrate

# Abrir Prisma Studio (interface visual)
npm run prisma:studio

# Popular banco com dados
npm run prisma:seed

# Resetar banco (CUIDADO!)
npx prisma migrate reset
```

---

## 🛠️ Tecnologias

- **Node.js** - Runtime
- **Express** - Framework web
- **Prisma** - ORM type-safe
- **MySQL** - Banco de dados
- **CORS** - Compartilhamento cross-origin
- **Dotenv** - Variáveis de ambiente

---

## 📦 Dependências

```json
{
  "@prisma/client": "^5.0.0",
  "cors": "^2.8.5",
  "dotenv": "^16.3.1",
  "express": "^4.18.2"
}
```

---

## 🐛 Troubleshooting

### Erro: "Cannot connect to database"
```bash
# Verifique se MySQL está rodando
mysql -u root -p

# Verifique as credenciais no .env
# DATABASE_URL deve estar correto
```

### Erro: "Table doesn't exist"
```bash
# Execute as migrations
npm run prisma:migrate
```

### Erro: "Prisma not found"
```bash
npm install prisma @prisma/client
npm run prisma:generate
```

---

## 📝 Padrão MVC

### Models (SnackModel.js)
Lógica de interação com banco de dados

### Controllers (SnackController.js)
Lógica de negócio e validações

### Routes (SnackRoutes.js)
Definição de endpoints e mapeamento

---

## ✨ Features

✅ CRUD completo (Create, Read, Update, Delete)  
✅ Filtro por categoria  
✅ Busca por nome (case-insensitive)  
✅ Validação de dados  
✅ Tratamento de erros  
✅ Logging de erros  
✅ Health check endpoint  
✅ CORS habilitado  
✅ Environment variables  
✅ Migrations com Prisma  

---

## 🔐 Segurança

- Validação de entrada
- Tratamento de erros apropriado
- SQL Injection prevention (via Prisma)
- CORS configurado
- Environment variables para secrets

---

## 📊 Exemplo de Dados

14 lanches populares são pré-carregados via seed:
- X-Bacon Especial
- X-Tudo Completo
- Cheeseburger Premium
- Smash Burger
- Hambúrguer Artesanal
- X-Salada
- X-Egg Supremo
- Hambúrguer Vegetariano
- Hambúrguer de Frango
- Misto Quente
- Beirute Tradicional
- Wrap Frio Grelhado
- Hambúrguer Duplo Gourmet
- Sanduíche de Peito de Peru

---

## 📄 Licença

MIT - Projeto acadêmico

---

## 👨‍💻 Autor

**Thales Filho**

**Versão**: 1.0.0

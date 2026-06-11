# 📦 GUIA DE INSTALAÇÃO COMPLETO

## 🎯 Objetivo
Instalação e execução completa do sistema **Hamburgueria Thales** em sua máquina.

---

## ✅ Pré-requisitos

Verifique se você tem instalado:

### Node.js & npm
```bash
# Verificar instalação
node --version    # Deve ser v16+
npm --version     # Deve ser v8+

# Se não tiver, baixe em: https://nodejs.org
```

### MySQL Server
```bash
# Verificar instalação
mysql --version

# Se não tiver, baixe em: https://dev.mysql.com/downloads/mysql/
```

### Git (opcional)
```bash
git --version
```

---

## 🚀 Instalação Passo a Passo

### PARTE 1: Preparar Banco de Dados

#### Passo 1.1: Abrir MySQL
```bash
# Windows/Mac/Linux
mysql -u root -p

# Digite sua senha (padrão é vazia ou "password")
```

#### Passo 1.2: Criar banco de dados
```sql
-- No prompt do MySQL, execute:
CREATE DATABASE hamburgueria_db;
USE hamburgueria_db;
EXIT;
```

✅ Banco de dados criado!

---

### PARTE 2: Setup Backend

#### Passo 2.1: Acessar pasta backend
```bash
cd "Teste av1"
cd backend
```

#### Passo 2.2: Instalar dependências
```bash
npm install
```

Aguarde até ver "added X packages"

#### Passo 2.3: Verificar arquivo .env
```bash
# Verifique se o arquivo .env existe
# Se não existir, copie .env.example:

# Windows
copy .env.example .env

# Mac/Linux
cp .env.example .env
```

#### Passo 2.4: Editar arquivo .env
Abra `backend/.env` em um editor e verifique:

```env
DATABASE_URL="mysql://root:password@localhost:3306/hamburgueria_db"
NODE_ENV="development"
PORT=3000
```

**Importante**: Substitua `password` pela sua senha do MySQL!

#### Passo 2.5: Gerar cliente Prisma
```bash
npm run prisma:generate
```

Resultado esperado:
```
✔ Generated Prisma Client to ./node_modules/@prisma/client
```

#### Passo 2.6: Executar migrations
```bash
npm run prisma:migrate
```

Será perguntado o nome da migration. Digite:
```
initial
```

Resultado esperado:
```
✔ Migrations created
✔ Database synced
```

#### Passo 2.7: Popular banco com dados
```bash
npm run prisma:seed
```

Resultado esperado:
```
✅ Database seeded com 14 lanches!
```

✅ Backend configurado!

---

### PARTE 3: Setup Frontend

#### Passo 3.1: Acessar pasta frontend
```bash
cd ../frontend
```

#### Passo 3.2: Instalar dependências
```bash
npm install
```

Aguarde "added X packages"

✅ Frontend configurado!

---

### PARTE 4: Executar Aplicação

#### Opção A: 2 Terminais (Recomendado)

**Terminal 1 - Backend**
```bash
cd backend
npm run dev
```

Aguarde até ver:
```
🚀 Server rodando em http://localhost:3000
```

**Terminal 2 - Frontend**
```bash
cd frontend
npm run dev
```

Aguarde até ver:
```
➜ Local: http://localhost:5173/
```

✅ Aplicação rodando!

#### Opção B: 1 Terminal (Sequencial)

```bash
# Iniciar backend
cd backend
npm run dev

# Em outro momento, abrir novo terminal
cd frontend
npm run dev
```

---

## 🌐 Acessar Aplicação

### Frontend
Abra no navegador:
```
http://localhost:5173
```

### Backend (Testar API)
```bash
# No terminal ou Postman
curl http://localhost:3000/api/snacks
```

---

## ✨ Primeira Execução

### Checklist
- ✅ Página carrega sem erros
- ✅ Ver 14 lanches na lista
- ✅ Buscar funcionando
- ✅ Filtro por categoria funcionando
- ✅ Criar novo lanche funciona
- ✅ Editar funciona
- ✅ Deletar funciona

### Test rápido
1. Vá para http://localhost:5173
2. Clique em "Lanches"
3. Veja os 14 lanches pré-carregados
4. Clique em "Novo Lanche"
5. Preencha o formulário
6. Clique em "Salvar"
7. Novo lanche aparece na lista

---

## 🐛 Solucionar Problemas

### Erro: "Cannot connect to database"
```
Solução:
1. Verifique se MySQL está rodando
2. Abra mysql -u root -p (deve funcionar)
3. Verifique a senha no .env
4. Verifique DATABASE_URL no .env
```

### Erro: "EADDRINUSE :::3000"
```
Significa: Porta 3000 já está em uso

Solução:
1. Feche outros processos na porta 3000
   Windows: netstat -ano | findstr :3000
   Mac/Linux: lsof -i :3000

2. Ou use outra porta no .env:
   PORT=3001
```

### Erro: "Module not found"
```
Solução:
1. npm install (instalar novamente)
2. Deletar pasta node_modules
3. npm install (instalar do zero)
```

### Erro: CORS
```
Significa: Frontend e Backend em portas diferentes erradas

Solução:
1. Backend deve estar em :3000
2. Frontend deve estar em :5173
3. Verifique os URLs
```

### Erro: "Cannot GET /api/snacks"
```
Significa: Backend não está respondendo

Solução:
1. Verifique se npm run dev foi executado
2. Verifique se está em http://localhost:3000
3. Verifique o console do Node.js para erros
```

### Erro: Imagens não carregam
```
Solução:
1. URLs de imagem devem ser HTTPS válidas
2. Teste a URL no navegador antes de salvar
```

---

## 🔧 Comandos Úteis

### Backend
```bash
npm run dev                 # Iniciar (com hot-reload)
npm run start               # Iniciar produção
npm run prisma:generate     # Gerar cliente
npm run prisma:migrate      # Executar migrations
npm run prisma:studio       # Interface visual do banco
npm run prisma:seed         # Popular dados
```

### Frontend
```bash
npm run dev                 # Iniciar dev server
npm run build               # Build para produção
npm run preview             # Preview do build
```

### Banco de Dados
```bash
# Conectar
mysql -u root -p

# Ver bancos
SHOW DATABASES;

# Usar banco
USE hamburgueria_db;

# Ver tabelas
SHOW TABLES;

# Ver dados
SELECT * FROM snacks;

# Contar registros
SELECT COUNT(*) FROM snacks;
```

---

## 🔍 Verificação Final

### Checklist de Instalação

```
Backend:
  ✅ npm install concluído
  ✅ .env configurado
  ✅ npm run prisma:generate executado
  ✅ npm run prisma:migrate executado
  ✅ npm run prisma:seed executado
  ✅ npm run dev rodando (porta 3000)

Frontend:
  ✅ npm install concluído
  ✅ npm run dev rodando (porta 5173)

Banco de Dados:
  ✅ MySQL está rodando
  ✅ Database 'hamburgueria_db' criado
  ✅ Tabela 'snacks' com 14 registros

Navegador:
  ✅ http://localhost:5173 abre sem erros
  ✅ 14 lanches aparecem na lista
  ✅ Pode fazer CRUD de lanches
```

---

## 📚 Próximos Passos

Depois de instalado:

1. **Explorar a UI**: Teste todas as funcionalidades
2. **Ler Documentação**: Veja [README.md](README.md)
3. **Estudar Código**: Entenda a arquitetura
4. **Fazer Modificações**: Customize conforme necessário
5. **Fazer Deploy**: Publique em servidor

---

## 🚀 Deploy (Opcional)

### Backend (Render/Heroku)
```bash
# Build
npm run build

# Push para Git
git push
```

### Frontend (Vercel/Netlify)
```bash
# Build
npm run build

# Deploy pasta dist/
```

---

## 📞 Suporte

Se encontrar problemas:

1. Verifique os pré-requisitos
2. Leia a seção "Solucionar Problemas"
3. Verifique os arquivos de LOG
4. Procure no [README](README.md)

---

## ✅ Instalação Completa!

Parabéns! Sistema completo instalado e funcionando! 🎉

**Próximo**: Abra http://localhost:5173 e comece a usar!

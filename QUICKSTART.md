# ⚡ QUICKSTART - Hamburgueria Thales

## 🎯 Iniciar em 5 minutos

### Pré-requisitos
- Node.js instalado
- MySQL Server rodando
- Um terminal/prompt de comando

---

## 🚀 Passo 1: Setup Inicial

### 1.1 Criar banco de dados MySQL
```sql
CREATE DATABASE hamburgueria_db;
```

### 1.2 Backend - Instalar e Configurar
```bash
cd backend
npm install
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed
```

### 1.3 Frontend - Instalar
```bash
cd ../frontend
npm install
```

---

## ▶️ Passo 2: Executar

### Terminal 1 - Backend
```bash
cd backend
npm run dev
```
✅ Backend rodando em: **http://localhost:3000**

### Terminal 2 - Frontend
```bash
cd frontend
npm run dev
```
✅ Frontend rodando em: **http://localhost:5173**

---

## 📖 Próximos passos

1. Abra **http://localhost:5173** no navegador
2. Clique em "Acessar Cardápio"
3. Comece a gerenciar seus lanches!

---

## 🎨 Interface

### Home
- Dashboard com estatísticas
- Botões de acesso rápido

### Catálogo
- Lista de todos os lanches
- Busca por nome
- Filtro por categoria
- Cards bonitos com preço

### Criar/Editar
- Formulário completo
- 22 categorias disponíveis
- Upload de imagem
- Validação automática

### Deletar
- Modal de confirmação
- Seguro contra acidentes

---

## 📱 Demonstração Rápida

1. **Ver lanches**: Clique em "Lanches" no menu
2. **Buscar**: Digite "Bacon" na barra de busca
3. **Filtrar**: Selecione "X-Bacon" na categoria
4. **Criar**: Clique em "Novo Lanche"
5. **Editar**: Clique no ✏️ de um lanche
6. **Deletar**: Clique no 🗑️ (com confirmação)
7. **Detalhes**: Clique em "Ver" para informações completas

---

## 🐛 Erro ao conectar?

### Erro: Cannot connect to MySQL
```bash
# Verifique se MySQL está rodando:
mysql -u root -p
# Se aparecer prompt, está ok!
```

### Erro: Connection refused
- Revise a URL em `backend/.env`
- Padrão: `mysql://root:password@localhost:3306/hamburgueria_db`
- Substitua `password` pela sua senha MySQL

### Erro: CORS
- Certifique-se de que backend está em http://localhost:3000
- Frontend deve estar em http://localhost:5173

---

## 📚 Documentação Completa

- [README Principal](../README.md) - Overview completo
- [Backend README](../backend/README.md) - API e banco de dados
- [Frontend README](../frontend/README.md) - Componentes e páginas

---

## ✨ Dados de Exemplo

14 lanches já pré-carregados no banco:
- X-Bacon Especial
- X-Tudo Completo
- Cheeseburger Premium
- Smash Burger
- Hambúrguer Artesanal
- E mais 9...

Tudo pronto para usar!

---

## 🎓 Requisitos Atendidos

✅ Node.js + Express  
✅ Prisma ORM  
✅ MySQL  
✅ React + Vite  
✅ Tailwind CSS  
✅ API REST Completa  
✅ CRUD Funcionando  
✅ Validações  
✅ Tratamento de erros  
✅ Design profissional  

---

## 💡 Dicas

- **Hot reload**: Salve o arquivo e a página atualiza automaticamente
- **Prisma Studio**: Execute `npm run prisma:studio` para ver o banco visualmente
- **Network tab**: Use F12 no browser para debugar requisições HTTP

---

**Pronto?** Abra http://localhost:5173 e comece! 🚀

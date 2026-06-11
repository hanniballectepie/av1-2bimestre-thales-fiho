# 🚀 GUIA RÁPIDO - XAMPP + Hamburgueria Thales

## ⚡ 3 Passos Rápidos

### **PASSO 1: Abrir XAMPP**

1. Abra **XAMPP Control Panel**
2. Clique em **"Start"** ao lado de **MySQL**
3. Espere aparecer **"Running"** em verde ✅

### **PASSO 2: Criar Banco de Dados**

1. Abra no navegador: `http://localhost/phpmyadmin`
2. Na esquerda, clique em **"Nova"** (ou "New")
3. Digite: `hamburgueria_db` no campo "Nome do banco"
4. Clique em **"Criar"**
5. Agora você vai ver `hamburgueria_db` na lista da esquerda

### **PASSO 3: Importar Dados**

1. Clique em `hamburgueria_db` (à esquerda)
2. Clique na aba **"Importar"**
3. Clique em **"Escolher Arquivo"** 
4. Selecione: `Teste av1\setup.sql`
5. Clique em **"Executar"**
6. Pronto! 14 lanches já estão no banco ✅

---

## ▶️ AGORA: Rodar a Aplicação

### **Terminal 1 - Backend**
```bash
cd "C:\Users\thales_filho\Downloads\Teste av1\backend"
npm run dev
```

Aguarde até aparecer:
```
🚀 Server rodando em http://localhost:3000
```

### **Terminal 2 - Frontend**
```bash
cd "C:\Users\thales_filho\Downloads\Teste av1\frontend"
npm run dev
```

Aguarde até aparecer:
```
➜ Local: http://localhost:5173/
```

---

## 🌐 Abrir a Aplicação

Clique ou copie:
```
http://localhost:5173
```

---

## ✅ Verificar

Na página deve aparecer:
- Título "🍔 Hamburgueria Thales"
- 14 lanches na lista
- Pode criar, editar e deletar lanches

---

## 🐛 Se der erro:

**"Cannot connect to database"**
- Verifique se XAMPP/MySQL está rodando (verde)
- Verifique se o banco `hamburgueria_db` foi criado

**Frontend branco/sem conteúdo**
- Abra F12 (Developer Tools)
- Vá em "Console"
- Veja qual é o erro
- Geralmente é conexão com backend

**Porta já em uso**
- Mude a porta no .env:
  ```
  PORT=3001
  ```

---

Tá pronto! 🚀

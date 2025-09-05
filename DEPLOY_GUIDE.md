# 🚀 Guia de Deploy - Site de Advocacia

## 📋 Pré-requisitos

1. **Git instalado** no seu computador
2. **Conta no GitHub** criada
3. **Conta no Vercel** (gratuita) para deploy automático

## 🔧 Passo a Passo para Deploy

### 1. **Instalar Git (se não tiver)**
- Baixe em: https://git-scm.com/download/win
- Instale com as configurações padrão

### 2. **Configurar Git no seu computador**
```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

### 3. **Inicializar repositório Git**
```bash
# No terminal, dentro da pasta do projeto
git init
git add .
git commit -m "Primeira versão do site de advocacia com formulário funcional"
```

### 4. **Criar repositório no GitHub**
1. Acesse: https://github.com
2. Clique em "New repository"
3. Nome: `advocacia-site` (ou o que preferir)
4. Deixe **público** (para Vercel gratuito)
5. **NÃO** marque "Add README" (já temos arquivos)
6. Clique "Create repository"

### 5. **Conectar com GitHub**
```bash
# Adicionar repositório remoto
git remote add origin https://github.com/SEU_USUARIO/advocacia-site.git

# Fazer push
git branch -M main
git push -u origin main
```

### 6. **Deploy no Vercel (Recomendado)**
1. Acesse: https://vercel.com
2. Faça login com sua conta GitHub
3. Clique "New Project"
4. Importe o repositório `advocacia-site`
5. Configure:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (padrão)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next` (padrão)
6. Clique "Deploy"

### 7. **Configurar Variáveis de Ambiente no Vercel**
1. No painel do Vercel, vá em "Settings" > "Environment Variables"
2. Adicione:
   - `DATABASE_URL`: `file:./db/custom.db`
   - `NEXTAUTH_SECRET`: `sua-chave-secreta-aqui`

### 8. **Configurar Banco de Dados**
Para produção, recomendo usar um banco online:
- **PlanetScale** (gratuito)
- **Supabase** (gratuito)
- **Railway** (gratuito)

## 🌐 Alternativas de Deploy

### **Netlify** (Alternativa ao Vercel)
1. Acesse: https://netlify.com
2. Conecte com GitHub
3. Selecione o repositório
4. Configure build: `npm run build`
5. Publish directory: `out`

### **GitHub Pages** (Estático)
```bash
# Instalar gh-pages
npm install --save-dev gh-pages

# Adicionar script no package.json
"homepage": "https://SEU_USUARIO.github.io/advocacia-site",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d out"
}

# Deploy
npm run deploy
```

## 📱 Domínio Personalizado (Opcional)

### **Vercel**
1. No painel do Vercel, vá em "Domains"
2. Adicione seu domínio
3. Configure DNS conforme instruções

### **Netlify**
1. No painel do Netlify, vá em "Domain management"
2. Adicione domínio personalizado
3. Configure DNS

## 🔄 Atualizações Futuras

Para atualizar o site:
```bash
# Fazer alterações no código
git add .
git commit -m "Descrição da atualização"
git push origin main
```

O Vercel/Netlify fará deploy automático!

## 📊 Monitoramento

- **Vercel**: Analytics e logs no painel
- **Netlify**: Analytics no painel
- **Google Analytics**: Adicionar código de tracking

## 🛠️ Comandos Úteis

```bash
# Ver status do Git
git status

# Ver histórico de commits
git log --oneline

# Voltar para commit anterior
git reset --hard HEAD~1

# Ver branches
git branch -a

# Criar nova branch
git checkout -b nova-feature
```

## ⚠️ Importante

1. **Nunca** commite arquivos `.env` com senhas
2. **Sempre** teste localmente antes do deploy
3. **Mantenha** backups do banco de dados
4. **Configure** monitoramento de erros

---

**🎉 Seu site estará online em poucos minutos!**

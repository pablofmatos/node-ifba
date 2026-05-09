========================================================================================
-- Primeiro passo: Instalar o node na máquina
https://nodejs.org/en/download

-- Criar diretório na pasta pablo
mkdir node-ifba

-- usar o diretório
cd node-ifba

-- Abrir terminal no VS Code
ctrl + '

-- inicia o projeto criando o package.json padrão
npm init -y  

-- instala o express
npm install express

-- No package.json, definir em script o seguinte comando para rodar automaticamente o nodemon
"start": "nodemon app.js"

-- O nodemon é uma ferramenta de desenvolvimento para Node.js que reinicia automaticamente a aplicação sempre que arquivos são alterados, eliminando a necessidade de parar e iniciar o servidor manualmente
npm install nodemon

// Criar as pastas no VS Code para começar a codificar em node.js
controllers, routes e services

// Roda o arquivo teste.js
node teste.js

-- Executa o projeto na porta 8000 que foi definida no package.json
npm run start
========================================================================================
-- Arquivo/pasta para ser ignorado ao subir no GitHub
.gitignore

-- No cmd do git no windows, definir usuário
git config user.name "pablofmatos"

-- No cmd do git no windows, definir e-mail
git config user.email "pablofmatos@ifba.edu.br"
==========================================================================================================================

# FlowInstant

O projeto tem a ideia de ser uma rede social para o público realizar posts instantâneos, destaques, socializar e compartilhar momentos interessantes de forma pública ou privada para seus seguidores. 

--------------------

# Backend do Projeto

Este guia irá ajudá-lo a configurar o ambiente de desenvolvimento.

## Requisitos Prévios

- Node.js e npm instalados. Você pode baixá-los em [nodejs.org](https://nodejs.org/).
- MySQL: A configuração é local, mas pode ser facilmente reconfigurada no arquivo backend/config/config.json
    - [mySQL download](https://dev.mysql.com/downloads/installer/)
    - [Interface Workbench](https://dev.mysql.com/downloads/workbench/)

## Instalação

Siga os passos abaixo para configurar o ambiente de desenvolvimento do backend.

### 1. Clone o Repositório


```bash
git clone https://github.com/01berta/api-social.git
```
### 2.1 Configure o Backend NODE + EXPRESS
```powershell

cd expenseControlApp/backend/src

npm install express --save
npm install -g nodemon
npm install --save sequelize
npm install --save body-parser
npm install --save mysql2
npm install --save-dev sequelize-cli
npm install dotenv
npm install cors -i

npx sequelize db:create
npx sequelize db:migrate
```
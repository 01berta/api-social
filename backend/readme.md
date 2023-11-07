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

npm install 

npx sequelize db:create
npx sequelize db:migrate
```

### 2.2 VIEWS

abaixo estão as views necessarias para o banco de dados referenciando a amizade ligado ao seguidor

```sql
CREATE VIEW amizade_seguido AS
select a.id, a.idSeguidor, a.idSeguido, u.nomeDeUsuario, u.fotoDePerfil, u.dataDeNascimento, u.biografia from amizadeseguindos as a 
inner join usuarios as u on a.idSeguido = u.id;
```

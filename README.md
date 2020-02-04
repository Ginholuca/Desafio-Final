
<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src="logo.png" width="300px" />
</h1>

<h3 align="center">
  :warning: Em desenvolvimento, etapa 1/4 :warning:
</h3>

## :rocket: Sobre o projeto

Esse projeto faz parte do desafio final da 10ª edição do Bootcamp GoStack da [Rocketseat](https://rocketseat.com.br/), ele será utilizado para avaliação e emissão do Certificado do Bootcamp GoStack.

Ele se consiste na criação de uma aplicação para uma transportadora fictícia, nomeada como FastFeet.

### Etapas
- 1/4 Back-end: [GoStack - Desafio 02](https://github.com/Rocketseat/bootcamp-gostack-desafio-02)
 

### **Sobre suas etapas**

<b>Etapa 1</b> - Foi proposto a criação de um projeto com funcionalidades básicas aprendidas no segundo módulo do Bootcamp, dentre elas:

- Configuração do ambiente de desenvolvimento e padronização de código.
- Desenvolvimento de uma API utilizando [Express](https://expressjs.com/),
- Utilização da ORM [Sequelize](https://sequelize.org/) para manipulação do banco de dados, fazendo uma relação dos objetos com os dados que os mesmos representam.
- Autenticação de usuários utilizando [JWT](https://jwt.io/) (JSON Web Token)
- Validação de dados de entrada utilizando [Yup](https://github.com/jquense/yup)

## 💻 Tecnologias

Esse projeto está sendo desenvolvido utilizando as seguintes libs e tecnologias:

### Back-end

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Nodemon](https://nodemon.io/)
- [Sucrase](https://github.com/alangpierce/sucrase)
- [Docker](https://www.docker.com/)
- [Postgres](https://www.postgresql.org/)
- [Sequelize](https://sequelize.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- [Yup](https://github.com/jquense/yup)

## :heavy_check_mark: Instalação

### Backend
```
# install all dependencies
yarn install

# execute sequelize migrations and seeds
yarn sequelize db:create --if-not-exists
yarn sequelize db:migrate
yarn sequelize db:seed:all

# start the app
yarn bob
````

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito por [Ginholuca](https://github.com/ginholuca/)

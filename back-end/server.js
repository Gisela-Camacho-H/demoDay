// Page -> https://www.cloudclusters.io
// Name -> nofem
// Lastname -> 98422
// Email -> nofem98422@swsguide.com
// Pass -> vektof-xodbe1-Jajdyc

// DB
// host -> mysql-62657-0.cloudclusters.net
// port -> 19878
// user -> admin
// pass -> AGb5sQGz

// -----------------------
// Pasos

// npm init -y

// npm i express mysql2 sequelize sequelize-cli

// ./node_modules/.bin/sequelize init

// ./node_modules/.bin/sequelize migration:create --name CreateTableProducts

// ./node_modules/.bin/sequelize migration:create --name CreateTableReviews

// ./node_modules/.bin/sequelize db:migrate

// Parte 2

// npm i helmet cors bcrypt jsonwebtoken

// ./node_modules/.bin/sequelize migration:create --name CreateTableUsers

// ./node_modules/.bin/sequelize db:migrate

// Parte 3

// npm i dotenv

require('dotenv').config() // Configuring dotenv

const express = require('express');
const app = express();
const helmet = require('helmet')
const cors = require('cors')

app.use(helmet())
app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', require('./routes'));

app.listen(process.env.PORT, () => {
  console.log(`Express on port 3000`);
});
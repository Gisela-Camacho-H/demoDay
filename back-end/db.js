const { Sequelize } = require('sequelize');

// Importing models
const Product = require('./models/posts');
const Review = require('./models/comments');
const User = require('./models/user');

// Database connection
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  port: process.env.DB_PORT,
  logging: false,
});

// Getting models
const models = [
  Product,
  Review,
  User
];

// Registering models into Sequelize
for (let model of models) {
  model(sequelize);
}

// Configuring relations
const { posts, comments } = sequelize.models;
comments.belongsTo(posts); // Relation one-to-one in reviews table

module.exports = sequelize;
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => sequelize.define('posts', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  author: DataTypes.STRING,
  title: DataTypes.STRING,
  description: DataTypes.TEXT,
  image: DataTypes.STRING,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
});
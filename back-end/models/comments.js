const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => sequelize.define('comments', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  author: DataTypes.TEXT,
  content: DataTypes.TEXT,
  postId: {
    type: Sequelize.INTEGER,
    references: {
      model: 'posts',
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
});
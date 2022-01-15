const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const permission = require('../middlewares/permission')

// Get all products
router.get('/', permission('admin', 'client'), async (req, res) => {
  const posts = await sequelize.models.posts.findAndCountAll();
  return res.status(200).json({ data: posts });
});

// Create a new product
router.post('/', permission('admin', 'client'), async (req, res) => {
  const { body } = req;
  const post = await sequelize.models.posts.create({
    author: body.author,
    title: body.title,
    description: body.description,
    image: body.image,
  });
  await post.save();
  return res.status(201).json({ data: post })
});

// Update a product by id
router.put('/:id', permission('admin', 'client'), async (req, res) => {
  const { body, params: { id } } = req;
  const post = await sequelize.models.posts.findByPk(id);
  if (!post) {
    return res.status(404).json({ code: 404, message: 'Post not found' });
  }
  const updatedPost = await post.update({
    author: body.author,
    title: body.title,
    description: body.description,
    image: body.image,
  });
  return res.json({ data: updatedPost });
});

// Delete a product by id
router.delete('/:id', permission('admin', 'client'), async (req, res) => {
  const { params: { id } } = req;
  const post = await sequelize.models.posts.findByPk(id);
  if (!post) {
    return res.status(404).json({ code: 404, message: 'Post not found' });
  }
  await post.destroy();
  return res.json();
});

module.exports = router;
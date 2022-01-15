const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const permission = require('../middlewares/permission')

// Get all reviews
router.get('/', permission('admin', 'client'), async (req, res) => {
  const comments = await sequelize.models.comments.findAndCountAll();
  return res.status(200).json({ data: comments });
});

// Creating a new review
router.post('/', permission('admin', 'client'), async (req, res) => {
  const { body } = req;
  const comment = await sequelize.models.comments.create({
    author: body.author,
    content: body.content,
    postId: body.postId,
  });
  await comment.save();
  return res.status(201).json({ data: comment });
});

// Update a review by id
router.put('/:id', permission('admin', 'client'), async (req, res) => {
  const { body, params: { id } } = req;
  const comment = await sequelize.models.comments.findByPk(id);
  if (!comment) {
    return res.status(404).json({ code: 404, message: 'Comment not found' });
  }
  const updatedComment = await comment.update({
    author: body.author,
    content: body.content,
  });
  return res.json({ data: updatedComment });
});

// Delete a review by id
router.delete('/:id', permission('admin', 'client'), async (req, res) => {
  const { params: { id } } = req;
  const comment = await sequelize.models.comments.findByPk(id);
  if (!comment) {
    return res.status(404).json({ code: 404, message: 'Comment not found' });
  }
  await comment.destroy();
  return res.json();
});

module.exports = router;
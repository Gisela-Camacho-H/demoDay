const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/authentication')

// Add the required routes
router.use('/auth', require('./auth'));
router.use('/posts', authenticate, require('./posts'));
router.use('/comments', authenticate, require('./comments'));
router.use('/users', authenticate, require('./users'));

module.exports = router;
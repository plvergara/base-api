const express = require('express');
const router = express.Router();
const controller = require('../controllers/base.controller');
const catsController = require('../controllers/cat.controller');

router.get('/', controller.base);

// Cats methods
router.get('/cats', catsController.list);
router.get('/cats/:id', catsController.detail);
router.post('/cats', catsController.create);

module.exports = router;
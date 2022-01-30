const express = require('express');

const professionalController = require('../controllers/professional');

const router = express.Router();

// GET /
router.get('/', professionalController.getPosts);

// POST /
router.post('/', professionalController.createPost);

module.exports = router;
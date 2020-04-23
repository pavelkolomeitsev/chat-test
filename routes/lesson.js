const express = require('express');

const lessonController = require('./controllers/lesson');

const router = express.Router();

router.get('/lesson');

module.exports = router;
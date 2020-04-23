const express = require('express');

const lessonController = require('./controllers/lesson');

const router = express.Router();

router.get('/lessons', lessonController.getLessons);

router.post('/lessons', lessonController.createLesson);

module.exports = router;
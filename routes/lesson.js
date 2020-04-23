const express = require('express');
const { body } = require('express-validator');

const lessonController = require('./controllers/lesson');

const router = express.Router();

router.get('/lessons', lessonController.getLessons);

router.post('/lesson', [
    body('theme').isLength({ min: 3 }),
    body('teacher').notEmpty().not().isAlphanumeric().isLength({ min: 7 }),
    body('students').isArray({ min: 1 }),
    body('classroom').isInt(),
    body('time').isLength({ min: 7 }),
], lessonController.createLesson
);

module.exports = router;
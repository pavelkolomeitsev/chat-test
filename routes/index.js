const express = require('express');
const { body } = require('express-validator');

const lessonController = require('./controllers/lessonController');

const router = express.Router();

router.get('/lessons', lessonController.getLessons);

router.post('/lesson', [
    body('theme').isLength({ min: 3 }),
    // body('teacherId').isLength({ min: 7 }),
    body('students').isArray({ min: 1 }),
    body('classroom').isInt(),
    body('time').isLength({ min: 7 }),
], lessonController.createLesson
);

router.get('/lesson/:lessonId', lessonController.getLesson);

// update router...
router.put('/lesson/:lessonId', [
    body('theme').isLength({ min: 3 }),
    // body('teacherId').isLength({ min: 7 }),
    body('students').isArray({ min: 1 }),
    body('classroom').isInt(),
    body('time').isLength({ min: 7 }),
], lessonController.updateLesson);

router.delete('/lesson/:lessonId', lessonController.deleteLesson);

module.exports = router;
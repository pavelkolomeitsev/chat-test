const { validationResult } = require('express-validator');

const Lesson = require('/chat_test/models/lesson');

exports.getLessons = async (req, res, next) => {

    try {

        const lessons = await Lesson.find()
            .populate('teacher', 'firstName lastName -_id')
            .populate('students', 'firstName lastName class -_id');
        if (!lessons) {
            const error = new Error('Any lessons were found!');
            error.statusCode = 404;
            throw error;
        }

        res.status(200).json({ message: 'Fetched lessons successfully!', lessons: lessons });

    } catch (error) {
        console.log(error);
    }
};

exports.createLesson = async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(422).json({
            message: 'Validation failed. Enter correct data!',
            errors: errors.array()
        });
    }
    const theme = req.body.theme;
    const teacherId = req.body.teacherId;
    const students = req.body.students;
    const classroom = req.body.classroom;
    const time = req.body.time;

    const lesson = new Lesson({
        theme: theme,
        teacher: teacherId,
        students: students,
        classroom: classroom,
        time: time
    });

    try {
        const result = await lesson.save();

        res.status(201).json({
            message: 'Lesson was added successfully!',
            result: result
        });

    } catch (error) {
        console.log(error);
    }
};

exports.getLesson = async (req, res, next) => {
    const lessonId = req.params.lessonId;

    try {
        const lesson = await Lesson.findById(lessonId)
            .populate('teacher', 'firstName lastName -_id')
            .populate('students', 'firstName lastName class -_id');

        if (!lesson) {
            const error = new Error('Lesson was not found!');
            error.statusCode = 404;
            throw error;
        }

        res.status(200).json({ message: 'Lesson fetched', lesson: lesson });

    } catch (error) {
        console.log(error);
    }
};

// update lesson
exports.updateLesson = async (req, res, next) => {

    const lessonId = req.params.lessonId;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(422).json({
            message: 'Validation failed. Enter correct data!',
            errors: errors.array()
        });
    }

    const theme = req.body.theme;
    const teacherId = req.body.teacherId;
    const students = req.body.students;
    const classroom = req.body.classroom;
    const time = req.body.time;

    try {
        const lesson = await Lesson.findById(lessonId);

        if (!lesson) {
            const error = new Error('Could not find the lesson');
            error.statusCode = 404;
            throw error;
        }

        lesson.theme = theme;
        lesson.teacher = teacherId;
        lesson.students = students;
        lesson.classroom = classroom;
        lesson.time = time;

        await lesson.save();

        res.status(200).json({
            message: 'Lesson was updated successfully!',
            result: lesson
        });

    } catch (error) {
        console.log(error);
    }
}

exports.deleteLesson = async (req, res, next) => {

    const lessonId = req.params.lessonId;

    try {
        await Lesson.findByIdAndDelete(lessonId);

        res.status(200).json({ message: 'Lesson was deleted' });

    } catch (error) {
        console.log(error);
    }
};
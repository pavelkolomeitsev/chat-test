const { validationResult } = require('express-validator');

const Lesson = require('/chat_test/models/lesson');

exports.getLessons = (req, res, next) => {
    res.status(200).json({
        lessons: [
            {
                theme: 'First lesson',
                teacher: 'Evgen Popov',
                students: [
                    'Ivan Kovtun',
                    'Maria Padalko',
                    'Anna Glushko',
                    'Petro Poroshenko',
                ],
                classroom: 27,
                time: '9:00 - 9:45'
            },
            {
                theme: 'English lesson',
                teacher: 'Alla Barsuk',
                students: [
                    'Ivan Kovtun',
                    'Maria Padalko',
                    'Anna Glushko',
                    'Petro Poroshenko',
                ],
                classroom: 18,
                time: '10:00 - 10:45'
            },
            {
                theme: 'Math lesson',
                teacher: 'Kateryna Shevchenko',
                students: [
                    'Ivan Kovtun',
                    'Maria Padalko',
                    'Anna Glushko',
                    'Petro Poroshenko',
                ],
                classroom: 27,
                time: '11:00 - 11:45'
            },
        ]
    });
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
    const teacher = req.body.teacherId;
    const students = req.body.students;
    const classroom = req.body.classroom;
    const time = req.body.time;

    const lesson = new Lesson({
        theme: theme,
        teacherId: teacher,
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
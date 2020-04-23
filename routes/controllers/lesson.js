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

exports.createLesson = (req, res, next) => {

    const theme = req.body.theme;
    const teacher = req.body.teacher;
    const students = req.body.students;
    const classroom = req.body.classroom;
    const time = req.body.time;

    // create lesson in db
    res.status(201).json({
        message: 'Lesson was created successfully!',
        post: { id: new Date().toISOString(), theme: theme, teacher: teacher, classroom: classroom, time: time }
    });
};
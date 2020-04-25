const mongoose = require('mongoose');

const Teacher = require('./teacher');
const Student = require('./student');

const Schema = mongoose.Schema;

const lessonSchema = new Schema({
    theme: {
        type: String,
        required: true
    },
    teacher: {
        type: Schema.Types.ObjectId,
        ref: 'Teacher',
        required: true
    },
    students: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Student',
            required: true
        }
    ],
    classroom: {
        type: Number,
        required: true
    },
    time: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Lesson', lessonSchema);
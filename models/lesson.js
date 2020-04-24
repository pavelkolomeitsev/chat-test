const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const lessonSchema = new Schema({
    theme: {
        type: String,
        required: true
    },
    teacherId: {
        type: Schema.Types.ObjectId,
        ref: 'Teacher',
        required: true
    },

    // [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: 'Student',
    //         required: true
    //     }
    // ],
    students: {
        type: Array,
        required: true
    },
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
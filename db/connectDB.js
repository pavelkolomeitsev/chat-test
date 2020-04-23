const mongoose = require('mongoose');

exports.connectDB = () => {
    mongoose.connect('mongodb+srv://pavel:yX3dbGT5P@clusternodeshop-frwbo.mongodb.net/messages?retryWrites=true&w=majority',
        { useNewUrlParser: true, useUnifiedTopology: true });
};
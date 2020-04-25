const mongoose = require('mongoose');

const mongoConnection = (callback) => {

    mongoose.connect(`mongodb+srv://${process.env.MONGO_NAME}:${process.env.MONGO_PASSWORD}@clusternodeshop-frwbo.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
        { useNewUrlParser: true, useUnifiedTopology: true })
        .then(result => {
            console.log('Connected!');
            callback();
        })
        .catch(error => {
            console.log(error);
            throw error;
        });
}

exports.mongoConnection = mongoConnection;
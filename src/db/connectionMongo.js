const mongoose = require('mongoose');

const mongoConnection = async (callback) => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGO_NAME}:${process.env.MONGO_PASSWORD}@clusternodeshop-frwbo.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
            { useNewUrlParser: true, useUnifiedTopology: true });

        console.log('Connected!');

        callback();
    } catch (error) {
        console.log(error);
    }
}

exports.mongoConnection = mongoConnection;
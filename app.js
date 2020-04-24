const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const lessonRoutes = require('./routes/index');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(lessonRoutes);

async function startServer() {
    try {
        await mongoose.connect('mongodb+srv://pavel:yX3dbGT5P@clusternodeshop-frwbo.mongodb.net/lessons?retryWrites=true&w=majority',
            { useNewUrlParser: true, useUnifiedTopology: true });
        app.listen(8000, () => {
            console.log('Server has been started...');
        });
    } catch (error) {
        console.log(error);
    }
};

startServer();
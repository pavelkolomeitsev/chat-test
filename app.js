const express = require('express');
const bodyParser = require('body-parser');

const lessonRoutes = require('./routes/lesson');
const connectMongo = require('./db/connectDB');

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
        await connectMongo; // ?
        app.listen(8000, () => {
            console.log('Server has been started...');
        });
    } catch (error) {
        console.log(error);
    }
};

startServer();
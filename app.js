const express = require('express');
const bodyParser = require('body-parser');

const lessonRoutes = require('./routes/index');
const mongoConnection = require('./db/connectionMongo').mongoConnection;

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(lessonRoutes);

mongoConnection(() => {
    app.listen(process.env.PORT || 8000);
});
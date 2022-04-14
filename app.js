const express = require('express');

const db = require("./data/database");
const index = require("./routes");

const app = express();
const mongoHost = '127.0.0.1';
const mongodbPort = '27017';
const mongoUri = `mongodb://${mongoHost}:${mongodbPort}`;
const mongoDbDatabaseName = 'test';


app.use(index)
//db.connectToMongoDB(mongoUri, mongoDbDatabaseName).then(() => {console.log(`\u2705 "${mongoUri}/${mongoDbDatabaseName}"`)})

module.exports = app;
const express = require('express');

const db = require("./data/database");
const index = require("./routes");

const app = express();

app.use(index)
db.connectToMongoDB().then(() => {console.log('...')})

module.exports = app;
const express = require('express');

require('dotenv').config();
const db = require('./data/database');
const { mongo } = require('./config/config');
const indexRoute = require('./routes/index.route');

const app = express();

app.use(indexRoute);

db.connectToMongoDB(mongo.uri, mongo.dbName)
	.then(() => {
		console.log(`\u2705 "${mongo.uri}/${mongo.dbName}"`);
	});

module.exports = app;
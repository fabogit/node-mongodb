const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

async function mongoClientConnect(mongoUri, mongoDbDatabaseName) {
	try {
		// connect to the mongo server
		const client = await MongoClient.connect(mongoUri);
		// connect to the database
		database = client.db(mongoDbDatabaseName);
		console.log('\u2705 MongoDB');
	} catch (error) {
		console.log(`\u274C MongoDB => ${error.message}`);
	}
}

// check for db connection
function getDb() {
	if (!database) {
		throw {message: '\u274C No database connection'};
	}
	console.log(`\u2705 Connected to database: ${database.databaseName}`);
	return database;
}

module.exports = {
	connectToMongoDB: mongoClientConnect,
	getDb: getDb,
};
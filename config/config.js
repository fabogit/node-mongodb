/* eslint-disable no-undef */
let nodeHost = 'localhost';
let serverPort = 3200;
if(process.env.PORT){
	serverPort = process.env.PORT;
}

const nodeConfig = {
	host: nodeHost,
	port: serverPort
};

let mongoUri = 'mongodb://127.0.0.1:27017';
if (process.env.MONGO_URI){
	mongoUri = process.env.MONGO_URI;
}
let mongoDatabaseName = 'dbtest';
if (process.env.DB_NAME){
	mongoDatabaseName = process.env.DB_NAME;
}
let testCollection = 'tests';
if (process.env.COLLECTION_TEST){
	testCollection = process.env.COLLECTION_TEST;
}

const mongodbConfig = {
	uri: mongoUri,
	dbName: mongoDatabaseName,
	testColl: testCollection
};

module.exports = {
	node: nodeConfig,
	mongo: mongodbConfig
};
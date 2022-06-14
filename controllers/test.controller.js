const db = require('../data/database');
const { mongo } = require('../config/config');

const testConnection = async (req, res, next) => {
	try {
		const result = await db.getDb().collection(mongo.testColl).find().toArray();
		res.status(200).send({
			message: 'Connected',
			data: [...result]
		});
	} catch (error) {
		console.log(error);
		return next();
	}
};

module.exports = {
	testConnection: testConnection
};
const express = require('express');

const testController = require('../controllers/test.controller');

const router = express.Router();

router.get('/testdb', testController.testConnection);

router.get('/', (req, res) => {
	const result = { message: 'Hello' };
	res.status(200).send(result);
});

module.exports = router;
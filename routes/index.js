const express = require('express');

const db = require("../data/database");

const router = express.Router();

router.get('/test', async (req, res) => {
  try {
    const result = await db.getDb().collection('test').find().toArray();
    res.status(200).send({ message: 'connected', data: [...result] });
  } catch (err) {
    throw err;
  }
});

router.get("/", (req, res) => {
  try {
    const result = { url: '/' };
    res.status(200).json(result);
  } catch (err) {
    throw err;
  }
});

module.exports = router;
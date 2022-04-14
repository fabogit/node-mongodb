const express = require('express');

const db = require("../data/database");

const router = express.Router();

router.get('/test', async (req, res) => {
  try {
    // const result = await db.getDb().collection('test').find().toArray();
    res.status(200).send({ message: 'Connected', 
    // data: [...result] 
  });
  } catch (err) {
    throw err;
  }
});

router.get("/", (req, res) => {
  try {
    const result = { message: 'Hello' };
    res.status(200).send(result);
  } catch (err) {
    throw err;
  }
});

module.exports = router;
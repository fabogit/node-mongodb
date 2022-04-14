const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello there');
});

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`running on ${port}`);
});
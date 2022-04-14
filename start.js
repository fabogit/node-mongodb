const app = require('./app');

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`\u2705 NodeJS Running on port: ${port}`);
});
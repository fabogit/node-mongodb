const app = require('./app');
const { node } = require('./config/config');

app.listen(node.port, () => {
	console.log(`\u2705 NodeJS Running on port: ${node.port}`);
});
'use strict'

const app = require('./app');
const config = require('./config');

app.listen(config.port, () => {
	console.log(`Api esta corriendo por el http://localhost:${config.port}`)
});
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const dbConfig = require('config').get('database');

const db = {};
const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
	dialect: 'mysql',
	host: dbConfig.host,
	port: dbConfig.port,
});

fs.readdirSync(__dirname)
	.filter(file => (file.indexOf('.') !== 0) && (file !== 'index.js'))
	.forEach((file) => {
		const model = sequelize.import(path.join(__dirname, file));
		db[model.name] = model;
	});

sequelize
	.authenticate()
	.then(() => {
		console.info('Connected %s:%s', dbConfig.host, dbConfig.port);
	}).catch((err) => {
		console.error(err, 'Error connecting to MySQL server');
	});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

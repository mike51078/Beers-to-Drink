// Connecting node to mysql
var mysql = require('mysql');
var jaws = require('jaws');
var keys = require('./keys.js');
var jaws = new jaws(keys.jaws);

var connection;

if (process.env.JAWSDB_URL) {
	//using JawsDB on Heroku for DB
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	//using localhost for DB
	connection = mysql.createConnection({
		host: 'localhost',
		port: 8080,
		user: 'root',
		password: 'root',
		database: 'burgers_db'
	});
}

// Make connection.
connection.connect(function(err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

// Export connection for ORM to use.
module.exports = connection;

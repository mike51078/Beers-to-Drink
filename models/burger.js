var orm = require('../config/orm.js');

var burger = {
	all: function(cb) {
		orm.all('burgers', function(res) {
			cb(res);
		});
	},
	create: function(col, val, cb) {
		orm.create('burgers', col, val, function(res) {
			cb(res);
		});
	},
	update: function(objColVal, condition, cb) {
		orm.update('burgers', objColVal, condition, function(res) {
			cb(res);
		});
	}
};

module.exports = burger;

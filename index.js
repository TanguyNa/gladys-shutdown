var shutdown = require('./lib/shutdown.js');
var reboot = require('./lib/reboot.js');
var command = require('./lib/shutdown.command.js');

module.exports = function(sails) {

	return {
		shutdown: shutdown,
		reboot: reboot,
		command: command
	};
};

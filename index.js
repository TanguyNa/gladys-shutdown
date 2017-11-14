module.exports = function(sails) {
		
    var shutdown = require('./lib/shutdown.js');
	var reboot = require('./lib/reboot.js');
	var command = require('./lib/shutdown.command.js');
	var setup = require('./lib/setup.js');
	
	return {
		shutdown: shutdown,
		reboot: reboot,
		command: command
	};
};

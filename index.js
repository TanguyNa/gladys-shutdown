var shutdown = require('./lib/shutdown.js');
var reboot = require('./lib/reboot.js');
var command = require('./lib/shutdown.command.js');
var install = require('./lib/install.js');
var uninstall = require('./lib/uninstall.js');

module.exports = function(sails) {

	return {
		shutdown: shutdown,
		reboot: reboot,
		command: command,
		install: install,
		uninstall: uninstall
	};
};

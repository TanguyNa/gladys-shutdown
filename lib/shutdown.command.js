module.exports = function command(scope) {
	
	switch(scope.label) {
        case 'shutdown':
		var shutdown = require('./shutdown.js');
		shutdown();
        break;

	case 'reboot':
		var reboot = require('./reboot.js');
		reboot();
	break;
        
        default:

        break;
    }
};
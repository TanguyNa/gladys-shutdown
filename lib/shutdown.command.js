var shutdown = require('./shutdown.js');
var reboot = require('./reboot.js');

module.exports = function command(scope) {
	
	switch(scope.label) {
        case 'shutdown':
			shutdown();
        break;

		case 'reboot':
			reboot();
		break;
        
        default:

        break;
    }
};
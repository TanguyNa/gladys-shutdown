const Promise = require('bluebird');

module.exports = function shutdown(){
		var exec = require('child_process').exec;
		
		return gladys.param.getValue('REBOOT_CMD')
        .then((cmd) => {
			sails.log.debug(cmd);
				exec(cmd);
		        }, sails.log.debug('Missing REBOOT_CMD parameter'));
	}


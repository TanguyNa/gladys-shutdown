const Promise = require('bluebird');
var exec = require('child_process').exec;

module.exports = function shutdown(){
		
		return gladys.param.getValue('SHUTDOWN_CMD')
        .then((cmd) => {
			sails.log.debug('exec parameter :' + cmd);
			if((typeof cmd != 'undefined') && cmd != null)
				exec(cmd);
	        }).catch(function(err){sails.log.debug('Error ' + SHUTDOWN_CMD + ' parameter')});
	}
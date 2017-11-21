const Promise = require('bluebird');
var sentences = require('./sentences.js');

module.exports = function setup(){

	gladys.user.get().then(function(user){

		if(user[0].language!='fr-FR')
			return gladys.utils.sql('DELETE FROM sentence WHERE uuid in (?,?)', [sentences.sentenceShutdownEn.uuid, sentences.sentenceRebootEn.uuid]);
		else return gladys.utils.sql('DELETE FROM sentence WHERE uuid in (?,?)', [sentences.sentenceShutdownFr.uuid, sentences.sentenceRebootFr.uuid]);
	});
    
};

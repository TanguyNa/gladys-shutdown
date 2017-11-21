const Promise = require('bluebird');
var sentences = require('./sentences.js');

module.exports = function install(){

//	gladys.user.get().then(function(user){
//		if(user[0].language!='fr-FR')
//Undefined au démarrage de gladys.

//on prends la langue du 1er admin
	gladys.utils.sql('select language from user where role=\'admin\' order by id').then(function(lang){
		if(lang[0].language!='fr-FR')
				gladys.sentence.insertBatch([sentences.sentenceShutdownEn, sentences.sentenceRebootEn]);
		else
			gladys.sentence.insertBatch([sentences.sentenceShutdownFr, sentences.sentenceRebootFr]);
	});
	
	var type = {
		name: 'Shutdown',
		service: 'shutdown'
	};

	return gladys.notification.install(type);
	
};

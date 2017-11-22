const Promise = require('bluebird');
var sentences = require('./sentences.js');

module.exports = function uninstall(){

	//gladys.user.get().then(function(user){
	//	if(user[0].language!='fr-FR')
	//On pourrait réutiliser le user mais ne serait pas cohérent avec l'install

	return gladys.utils.sql('select language from user where role=\'admin\' order by id').then(function(lang){
		if(lang[0].language!='fr-FR')
			gladys.utils.sql('DELETE FROM sentence WHERE uuid in (?,?)', [sentences.sentenceShutdownEn.sentences[0].uuid, sentences.sentenceRebootEn.sentences[0].uuid]);
		else gladys.utils.sql('DELETE FROM sentence WHERE uuid in (?,?)', [sentences.sentenceShutdownFr.sentences[0].uuid, sentences.sentenceRebootFr.sentences[0].uuid]);
	});
	
};

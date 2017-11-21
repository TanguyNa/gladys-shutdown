const Promise = require('bluebird');
var sentences = require('./sentences.js');

module.exports = function setup(){

//	gladys.user.get().then(function(user){

//		if(user[0].language!='fr-FR')
//			return gladys.sentence.create(sentences.sentenceShutdownEn) && gladys.sentence.create(sentences.sentenceRebootEn);
//		else return gladys.sentence.create(sentences.sentenceShutdownFr) && gladys.sentence.create(sentences.sentenceRebootFr);
//	});
 
 return gladys.sentence.create(sentences.sentenceShutdownEn) && gladys.sentence.create(sentences.sentenceRebootEn) && gladys.sentence.create(sentences.sentenceShutdownFr) && gladys.sentence.create(sentences.sentenceRebootFr);
};

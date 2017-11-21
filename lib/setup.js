const Promise = require('bluebird');

module.exports = function setup(){
    
    var sentenceShutdownFr = {
            uuid: '661629ba-e59e-483a-adb3-a22bd151a609',
            text: 'Eteins-toi',
            label: 'shutdown',
            service: 'shutdown',
			language: 'fr',
			status: 'approved'
    };

	
    var sentenceRebootFr = {
            uuid: '44a21743-4e2f-4f5d-9c2c-0dcf9de7f2b9',
            text: 'Redémarre',
            label: 'reboot',
            service: 'shutdown',
			language: 'fr',
			status: 'approved'
    };
	
	var sentenceShutdownEn = {
            uuid: 'c1ba8fed-e64b-431a-be7e-b2306c1922ec',
            text: 'Shutdown',
            label: 'shutdown',
            service: 'shutdown',
			language: 'en',
			status: 'approved'
    };

	
    var sentenceRebootEn = {
            uuid: 'e66ecb76-71d7-4fa7-8a1a-151023802781',
            text: 'Reboot',
            label: 'reboot',
            service: 'shutdown',
			language: 'en',
			status: 'approved'
    };

	gladys.user.get().then(function(user){

		if(user[0].language!='fr-FR')
			return gladys.sentence.create(sentenceShutdownEn) && gladys.sentence.create(sentenceRebootEn);
		else return gladys.sentence.create(sentenceShutdownFr) && gladys.sentence.create(sentenceRebootFr);
	});
    
};

(function() {
	angular.module('madLibs')
		.factory('AddWords',addWords);

	function addWords(DefaultWords) {
		//	This is what the service is supposed to do overall (Reference methods)
		var service = {
			fill: fill
		}
		return service;
		
//		This is where we implement the methods (Implement & Define)
		function fill(userWords) {
			var userWordsNew = {};
			for(var key in userWords) {
				var strToArr = userWords[key].split(",");
				userWordsNew[key] = strToArr;
				eliminateBlankStr(userWordsNew, key);
				addDefaultWords(userWordsNew,key);
			}
			return userWordsNew;
		}
		
		// utility functions		
		function eliminateBlankStr(object, objKey) {
			if(object[objKey][0] === '') {
				object[objKey].splice(0,1);
			}
			console.log(object);
		}

		function addDefaultWords(userWordsNew, key) {
			while(userWordsNew[key].length < 4) {
				userWordsNew[key].push(getRandWord(key));
			}
		}

		function getRandWord(wordType){
			var randNumber = Math.floor((Math.random() * 9) + 1);
			var randWord = DefaultWords[wordType][randNumber];
			return randWord;
			//			return 'default_' + wordType;
		}
	}
})();
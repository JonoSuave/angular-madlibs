(function() {
	angular.module('madLibs')
	.factory('DefaultWords',defaultWords);
	
	function defaultWords() {
		var defaultNouns = [];
		var defaultAdjectives = [];
		var defaultVerbs = [];
		var defaultAdverbs = [];
		
		var service = {
			nouns: 3
		};
		return service;
	}
})();
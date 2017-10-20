(function() {
	angular.module('madLibs')
	
	.controller('madLibController', madLibCtrl);
	
	function madLibCtrl(AddWords) {
		var vm = this;
		
		// local variables - var ANYTHING
		
		// bindings to methods
		vm.addWords = addWords;
		
		// bound properties
		vm.final = {
			nouns: new Array(4),
			verbs: new Array(4),
			adjectives: new Array(4),
			adverbs: new Array(4)
		};
		vm.selectStory = null;
		vm.userWords = {
			nouns: '',
			verbs: '',
			adjectives: '',
			adverbs: ''
		};
		vm.userWordsObjArr = {};
		
		// bound method implementations
		
		function addWords() {
			var userWordsNew = AddWords.fill(vm.userWords);
			vm.final = userWordsNew;
		}
	}
})();
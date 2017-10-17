(function() {
	angular.module('madLibs')
	
	.controller('madLibController', madLibCtrl);
	
	function madLibCtrl(DefaultWords) {
		var vm = this;
		
		// local variables - var ANYTHING
		
		// bindings to methods
		vm.generate = generate;
		vm.addWords = addWords;
		
		// bound properties
		vm.count = DefaultWords.nouns;
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
		}
		
		// bound method implementations
		function generate(){
			console.log(toInt());
		}
		
		function addWords(object) {
			for(var prop in object) {
				var strToArr = prop.split(",");
			}
			console.log(strToArr);
			
//			maybe try using ng-click on submit to get this going
//			Also, maybe ng-model input to userWords and have those words 
//			Okay, maybe have ng-model with input and userWords, then have submit throw them into a function which
//			then pushes them into the final array of words
		}
		
		// utility functions
		function toInt(){
			return 3;
		}
	}
})();
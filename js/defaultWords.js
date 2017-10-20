(function() {
	angular.module('madLibs')
	.factory('DefaultWords',defaultWords);
	
	function defaultWords() {
		var defaultNouns = ['hippopotamus', 'apple', 'monkey', 'crab', 'Miguel', 'snarl', 'Kronk', 'Da Vincci', 'elephant'];
		var defaultAdjectives = ['soft', 'green', 'scratchy', 'rough', 'roomy', 'mild-mannered', 'roomy', 'lavish', 'zealous'];
		var defaultVerbs = ['run', 'shun', 'stun', 'shout', 'jump', 'whisper', 'turn', 'launch', 'applaud'];
		var defaultAdverbs = ['crazily', 'lazily', 'happily', 'absentmindedly', 'unbearably', 'sweetly', 'properly', 'faithfully', 'colorfully', 'delightfully', 'flirtingly'];
		
		var service = {
			nouns: defaultNouns,
			adjectives: defaultAdjectives,
			verbs: defaultVerbs,
			adverbs: defaultAdverbs
		};
		return service;
	}
})();
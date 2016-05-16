(function(){
	'use strict';
	angular.module('progressTracker.module')
		.controller('progressTrackerCntrl', progressTrackerCntrl);

	progressTrackerCntrl.$inject = ['$rootScope', '$viewContentLoaded '];

	function progressTrackerCntrl($rootScope, $viewContentLoaded ){
		$rootScope.$on('$viewContentLoaded ', 
			function(event, toState, toParams, fromState, fromParams, options){ 
				console.log('change');
		 });
	}

})();
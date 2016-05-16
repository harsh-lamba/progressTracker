(function(){
	'use strict';

	angular.module('progressTracker.module').
		config('progressTrackerConfig', progressTrackerConfig);

	progressTrackerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

	function progressTrackerConfig(){

		//Now setup views
		$stateProvider
			.state('', {
				url: '',
				templateUrl : ''
			});

		$urlRouterProvider.otherwise("/state");

	}
})();
(function(){
	'use strict';
	angular.module('progressTracker.module')
		.directive('progressTracker', progressTracker);

	progressTracker.$inject = ['progressTrackerService', '$compile'];

	function progressTracker(progressTrackerService, $compile){
		var directive;

		directive = {
			restrict : 'AE',
			scope : {

			},
			compile : compileFunction,
			replace : true
		};

		return directive;

		/////////////////////////////

		//Compile is called only once during application initialization. Angular js call it once when html page is loaded.
		function compileFunction(element, attribute){

			//linkFunction is linked to each element with scope to get the element specific data
			var linkFunction = linkFunction;

			return linkFunction;

			/////////////////////////////////////////////

			function linkFunction(scope, element, attribute){
				
				var dom  = progressTrackerService.domCreation();

				element.append($compile(dom)(scope));
			}

		}
	}
})();
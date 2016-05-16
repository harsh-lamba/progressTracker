(function(){
	'use strict';

	angular.module('progressTracker.module')
		.config(progressTrackerConfig);
	
	progressTrackerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

	function progressTrackerConfig($stateProvider, $urlRouterProvider){

		//Now setup views
		$stateProvider
			.state('vacature', {
				url: '/vacature',
				templateUrl : 'template/vacature/vacatureLabels.html'
			})
			.state('vacature.label', {
				url: '/label',
				templateUrl : 'template/vacature/vacatureLabels.html'
			})
			.state('vacature.titel', {
				url: '/titel',
				templateUrl : 'template/vacature/vacatureTitel.html'
			})
			// .state('vacature.inhoud', {
			// 	url: '/inhoud',
			// 	templateUrl : 'template/vacature/vacatureTekstInhoud.html'
			// })
			// .state('vacature.overzicht', {
			// 	url: '/overzicht',
			// 	templateUrl : 'template/vacature/vacatureOverzicht.html'
			// })
			// .state('vacature.advies', {
			// 	url: '/advies',
			// 	templateUrl : 'template/vacature/vacatureAdvies.html'
			// })
			//////////////////////////////
			//Instroom
			///////////////////////////
			// .state('instroom', {
			// 	url: '/instroom',
			// 	templateUrl : 'template/instroomManagement/instroomAssessments.html'
			// })
			// .state('instroom.assessments', {
			// 	url: '/assessments',
			// 	templateUrl : 'template/instroomManagement/instroomAssessments.html'
			// })
			// .state('instroom.benchmark', {
			// 	url: '/benchmark',
			// 	templateUrl : 'template/instroomManagement/instroomBenchmark.html'
			// })
			// .state('instroom.chat', {
			// 	url: '/chat',
			// 	templateUrl : 'template/instroomManagement/instroomChat.html'
			// })
			// .state('instroom.analenmix', {
			// 	url: '/analenmix',
			// 	templateUrl : 'template/instroomManagement/instroomkanalenmix.html'
			// })
			//////////////////////////////
			//Concepten
			///////////////////////////
			.state('concepten', {
				url: '/concepten',
				templateUrl : 'template/concepten/conceptenActueel.html'
			})
			.state('concepten.Actueel', {
				url: '/concepten/Actueel',
				templateUrl : 'template/concepten/conceptenActueel.html'
			})
			.state('concepten.Archief', {
				url: '/concepten/Archief',
				templateUrl : 'template/concepten/conceptenArchief.html'
			});
			//////////////////////////////
			//Publicates
			///////////////////////////
			// .state('publicates', {
			// 	url: '/publicates',
			// 	templateUrl : 'template/publicaties/publicatiesActueel.html'
			// })
			// .state('publicates.Actueel', {
			// 	url: '/Actueel',
			// 	templateUrl : 'template/publicaties/publicatiesActueel.html'
			// })
			// .state('publicates.Archief', {
			// 	url: '/Archief',
			// 	templateUrl : 'template/publicaties/publicatiesArchief.html'
			// });

		$urlRouterProvider.otherwise("/vacature/label");

	}
})();
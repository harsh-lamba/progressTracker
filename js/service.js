	(function(){
		'use strict';
		angular.module('progressTracker.module'),
			service('progressTrackerService', progressTrackerService);

		progressTrackerService.$inject = [];

		function progressTrackerService(){
			var service,
				_tracker;

			service = {
				getTrackerJson : getTrackerJson 
			};

			return service;

			///////////////////////////////

			function getTrackerJson(){
				return _tracker;
			}

			//////////////////////////////
			//------JSON 
			//////////////////////////////
			_tracker = 
			[
				{
					'label' : 'Parent1',
					'items' : 
					[
						{
							'label' : 'child'
						},
						{
							'label' : 'child'
						},
						{
							'label' : 'child'
						},
						{
							'label' : 'child'
						}
					]
				},
				{
					'label' : 'Parent1',
					'items' : 
					[
						{
							'label' : 'child'
						},
						{
							'label' : 'child'
						},
						{
							'label' : 'child'
						},
						{
							'label' : 'child'
						}
					]
				},
				{
					'label' : 'Parent1',
					'items' : 
					[
						{
							'label' : 'child'
						},
						{
							'label' : 'child'
						},
						{
							'label' : 'child'
						},
						{
							'label' : 'child'
						}
					]
				},
				{
					'label' : 'Parent1',
					'items' : 
					[
						{
							'label' : 'child'
						},
						{
							'label' : 'child'
						},
						{
							'label' : 'child'
						},
						{
							'label' : 'child'
						}
					]
				},
			]
		}
	})();
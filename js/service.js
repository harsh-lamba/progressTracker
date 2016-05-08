	(function(){
		'use strict';
		angular.module('progressTracker.module').
			service('progressTrackerService', progressTrackerService);

		progressTrackerService.$inject = [];

		function progressTrackerService(){
			var service,
				_tracker,
				_domElement;

			/////////////////////////////
			//------JSON and object
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
			];

			_domElement = {
				"ulElem" : angular.element("<ul></li>"),
				"liElem" : angular.element("<li></li>"),
				"aElem" : angular.element("<a></a>")
			}

			service = {
				domCreation : domCreation
			};

			return service;

			///////////////////////////////

			function domCreation(){
				_recursiveIteration(_tracker);

				console.log(_domElement.ulElem);

				return _domElement.ulElem;
			}

			function _recursiveIteration(jsonObj){
				debugger;
				if (typeof jsonObj !== "object")
					return false;

				//Should have ul element first

				for (var item in jsonObj){
					let current = jsonObj[item],
						label = current.label,
						liElem = _domElement.liElem,
						aElem = _domElement.aElem;

					//text in anchor element
					aElem.text(label);

					//Append anchor element
					liElem.append(aElem);

					//Append li element
					_domElement.ulElem.append(liElem);

					
					_recursiveIteration(current.items);
				}
			}
		}
	})();
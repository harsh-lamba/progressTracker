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
							'label' : 'child1'
						},
						{
							'label' : 'child2'
						},
						{
							'label' : 'child3'
						},
						{
							'label' : 'child4'
						}
					]
				},
				{
					'label' : 'Parent2',
					'items' : 
					[
						{
							'label' : 'child1'
						},
						{
							'label' : 'child2'
						},
						{
							'label' : 'child3'
						},
						{
							'label' : 'child4'
						}
					]
				}
				// {
				// 	'label' : 'Parent1',
				// 	'items' : 
				// 	[
				// 		{
				// 			'label' : 'child'
				// 		},
				// 		{
				// 			'label' : 'child'
				// 		},
				// 		{
				// 			'label' : 'child'
				// 		},
				// 		{
				// 			'label' : 'child'
				// 		}
				// 	]
				// },
				// {
				// 	'label' : 'Parent1',
				// 	'items' : 
				// 	[
				// 		{
				// 			'label' : 'child'
				// 		},
				// 		{
				// 			'label' : 'child'
				// 		},
				// 		{
				// 			'label' : 'child'
				// 		},
				// 		{
				// 			'label' : 'child'
				// 		}
				// 	]
				// },
			];

			_domElement = {
				"ulElem" : angular.element("<ul></li>"),
				"liElem" : angular.element("<li></li>"),
				"aElem" : angular.element("<a></a>")
			}


			////////////////////////////////
			// Service Object
			///////////////////////////////
			_Menu.prototype.render = _render;
			
			_Menu.renderMenus = _renderMenus;


			//Exposed method
			service = {
				domCreation : domCreation
			};

			return service;

			///////////////////////////////

			function domCreation(ele){
				debugger;
				_Menu.renderMenus(_tracker, ele);
			}

			function _Menu(data){
				this.data = data;
			}

			function _render(root) {
				//debugger;
				var ul = angular.element("<ul></ul>"),
					li = angular.element("<li></li>"),
					anch = angular.element("<a></a>");

				anch.text(this.data.label);

				li.append(anch).appendTo(ul);

				ul.appendTo(root);

				if(this.data.items){
					_Menu.renderMenus(this.data.items, angular.element("<li></li>").appendTo(ul));
				}
			}

			function _renderMenus(menus, root){
				for(var item in menus){
					var m = new _Menu(menus[item]);
					m.render(root);
				}
			}
		}
	})();
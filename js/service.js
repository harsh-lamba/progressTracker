	(function(){
		'use strict';
		angular.module('progressTracker.module').
			service('progressTrackerService', progressTrackerService);

		progressTrackerService.$inject = [];

		function progressTrackerService(){
			var service,
				_tracker,
				_html = [],
				list;

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


			//Progress tracker object
			Menu.prototype._renderList = _renderList;
			Menu.prototype._attachhandler = _attachhandler; 
			Menu.prototype._toggleNext = _toggleNext;

			//Exposed method
			service = {
				domCreation : domCreation,
				attachhandler : _attachhandler
			};

			return service;

			///////////////////////////////			

			function domCreation(ele){
				//debugger;
				var htmlString;

				list = new Menu(_tracker);

				htmlString = list._renderList(_tracker);

				ele.append(htmlString.join(''));

				//attach handler
				list._attachhandler(ele);
			}

			function Menu(data){
				this.data =data;
			}

			function _renderList(arr){
				_html.push('<ul>');

				for(var i in arr){
					_html.push('<li><a class="isToggle">' + arr[i].label + '</a>');

					if(arr[i].items){
						_renderList(arr[i].items);
					}

					_html.push('</li>');
				}

				_html.push('</ul>');

				return _html;
			}

			function _attachhandler(ele){
				var anchor,
					anchorELements = angular.element(ele).find("a"),
					elementToAttachEvent = _returnAnchors(anchorELements);

				angular.forEach(elementToAttachEvent, function (value, key){
					var anchor = angular.element(value);

					if(anchor.length){
						anchor.on("click", _toggleNext);
					}
				});
			}

			function _toggleNext(e){
				console.log('in');
				var _this = angular.element(this),
					nextEle = _this.next(),
					anchors = angular.element(".isToggle"),
					elementToToggle = _returnAnchors(anchors);

				console.log(elementToToggle);

				angular.forEach(elementToToggle, function(value, key){
					var anchor = angular.element(value),
						nextEle = anchor.next();

					if(nextEle.length){
						nextEle.removeClass("toggle");
					}
				});

				if(nextEle.length){
					nextEle.addClass("toggle");
				}
			
			}

			function _returnAnchors(obj){
				var anchors = [];

				angular.forEach(obj, function (value, key){
					var anchor = angular.element(value),
						nextEle = anchor.next();

					if(nextEle.length){
						anchors.push(anchor);
					}
				});

				return anchors;
			}
		}
	})();
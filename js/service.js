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
							'label' : 'Parent1child1'
						},
						{
							'label' : 'Parent1child2'
						},
						{
							'label' : 'Parent1child3'
						},
						{
							'label' : 'Parent1child4'
						}
					]
				},
				{
					'label' : 'Parent2',
					'items' : 
					[
						{
							'label' : 'Parent2child1'
						},
						{
							'label' : 'Parent2child2'
						},
						{
							'label' : 'Parent2child3'
						},
						{
							'label' : 'Parent2child4'
						}
					]
				},
				{
					'label' : 'Parent3',
					'items' : 
					[
						{
							'label' : 'Parent3child'
						},
						{
							'label' : 'Parent3child'
						},
						{
							'label' : 'Parent3child'
						},
						{
							'label' : 'Parent3child'
						}
					]
				},
				{
					'label' : 'Parent4',
					'items' : 
					[
						{
							'label' : 'Parent4child'
						},
						{
							'label' : 'Parent4child'
						},
						{
							'label' : 'Parent4child'
						},
						{
							'label' : 'Parent4child'
						}
					]
				}
			];


			//Progress tracker object
			Menu.prototype._renderList = _renderList;
			Menu.prototype._attachhandler = _attachhandler; 
			Menu.prototype._toggleNext = _toggleNext;

			//Exposed method
			service = {
				domCreation : domCreation,
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
				var count = 0;
				_html.push('<ul>');

				for(var i in arr){

					count = count + 1;

					_html.push(
							'<li>' +
							'<a class="isToggle">' +
							'<span class="img-circle">' + count + '</span>' +
							 '<label>' + arr[i].label + '</label>' +
							'</a>');

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
					//First time visible
					if(key === 0){
						anchor.click();
					}
				});
			}

			function _toggleNext(e){
				var _this = angular.element(this),
					nextEle = _this.next(),
					anchors = angular.element(".isToggle"),
					elementToToggle = _returnAnchors(anchors);

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
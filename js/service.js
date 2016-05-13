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
					'label' : 'Vacature inhoud',
					'items' : 
					[
						{
							'label' : 'Label',
							'url' : ''
						},
						{
							'label' : 'Titel',
							'url' : ''
						},
						{
							'label' : 'Tekst inhoud',
							'url' : ''
						},
						{
							'label' : 'Vacature overzicht',
							'url' : ''
						},
						{
							'label' : 'Verbeteradvies',
							'url' : ''
						}
					]
				},
				{
					'label' : 'Instroom management',
					'items' : 
					[
						{
							'label' : 'Benchmark',
							'url' : ''
						},
						{
							'label' : 'Kanalenmix',
							'url' : ''
						},
						{
							'label' : 'Assessments',
							'url' : ''
						},
						{
							'label' : 'Chat',
							'url' : ''
						}
					]
				},
				{
					'label' : 'Concepten',
					'items' : 
					[
						{
							'label' : 'Actueel',
							'url' : ''
						},
						{
							'label' : 'Archief',
							'url' : ''
						}
					]
				},
				{
					'label' : 'Publicaties',
					'items' : 
					[
						{
							'label' : 'Actueel',
							'url' : ''
						},
						{
							'label' : 'Archief',
							'url' : ''
						},
					]
				}
			];


			//Progress tracker object
			Menu.prototype._renderList = _renderList;
			Menu.prototype._getParentAnchor = _getParentAnchor;
			Menu.prototype._attachhandler = _attachhandler; 
			Menu.prototype._toggleNext = _toggleNext;
			Menu.prototype._returnAnchors = _returnAnchors;

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

				htmlString = list._renderList();

				ele.append(htmlString.join(''));

				//attach handler
				list._getParentAnchor(ele);
			}

			function Menu(data){
				this.data =data;
			}

			function _renderList(arrObj){
				var count = 0,
					arr = arrObj || this.data;

				_html.push('<ul>');
				
				for (var i in arr){

					count = count + 1;

					_html.push(
							'<li>' +
							'<a class="isToggle">' +
							'<span class="img-circle">' + count + '</span>' +
							 '<label>' + arr[i].label + '</label>' +
							'</a>');

					if(arr[i].items){
						list._renderList(arr[i].items);
					}

					_html.push('</li>');
				}

				_html.push('</ul>');

				return _html;
			}

			function _getParentAnchor(ele){
				var anchor,
					anchorELements = angular.element(ele).find("a"),
					elementToAttachEvent = _returnAnchors(anchorELements);

				angular.forEach(elementToAttachEvent, function (value, key){
					var anchor = angular.element(value);

					if(anchor.length){
						list._attachhandler(anchor, "click", _toggleNext);
					}
					//First time visible
					if(key === 0){
						anchor.click();
					}
				});
			}

			//Attach handler
			function _attachhandler(ele, event, fn){
				if(!ele.length && !event.length && typeof fn !== "function"){
					return;
				}

				var element = angular.element(ele);

				element.on(event, fn);
			}

			/*Call back for parent nodes*/
			function _toggleNext(e){
				var _this = angular.element(this),
					nextEle = _this.next(),
					anchors = angular.element(".isToggle"),
					elementToToggle = list._returnAnchors(anchors);

				angular.forEach(elementToToggle, function(value, key){
					var anchor = angular.element(value),
						nextEle = anchor.next();

					if(nextEle.length){
						anchor.removeClass("current");
						nextEle.removeClass("toggle");
					}
				});

				if(nextEle.length){
					_this.addClass("current");
					nextEle.addClass("toggle");
				}			
			}

			//Returns anchors which has 'ul' as sibling element
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
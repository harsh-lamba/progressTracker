	(function(){
		'use strict';
		angular.module('progressTracker.module').
			service('progressTrackerService', progressTrackerService);

		progressTrackerService.$inject = ['$timeout', '$state'];

		function progressTrackerService($timeout, $state){
			var service,
				_tracker,
				_html = [],
				list,
				cacheElement; 

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
							'url' : '/vacature/label',
							'urlState' : 'vacature.label' 
						},
						{
							'label' : 'Titel',
							'url' : '/vacature/titel',
							'urlState' : 'vacature.titel'
						},
						{
							'label' : 'Tekst inhoud',
							'url' : '/vacature/inhoud',
							'urlState' : 'vacature.inhoud'
						},
						{
							'label' : 'Vacature overzicht',
							'url' : '/vacature/overzicht',
							'urlState' : 'vacature.overzicht'
						},
						{
							'label' : 'Verbeteradvies',
							'url' : '/vacature/advies',
							'urlState' : 'vacature.advies'
						}
					]
				},
				{
					'label' : 'Instroom management',
					'items' : 
					[
						{
							'label' : 'Benchmark',
							'url' : '/benchmark',
							'urlState' : 'instroom.benchmark'
						},
						{
							'label' : 'Kanalenmix',
							'url' : '/analenmix',
							'urlState' : 'instroom.analenmix'
						},
						{
							'label' : 'Assessments',
							'url' : '/assessments',
							'urlState' : 'instroom.assessments'
						},
						{
							'label' : 'Chat',
							'url' : '/chat',
							'urlState' : 'instroom.chat'
						}
					]
				},
				{
					'label' : 'Concepten',
					'items' : 
					[
						{
							'label' : 'Actueel',
							'url' : '/Actueel',
							'urlState' : 'concepten.assessments'
						},
						{
							'label' : 'Archief',
							'url' : '/Archief',
							'urlState' : 'concepten.assessments'
						}
					]
				},
				{
					'label' : 'Publicaties',
					'items' : 
					[
						{
							'label' : 'Actueel',
							'url' : '/Actueel',
							'urlState' : 'publicates.Actueel'
						},
						{
							'label' : 'Archief',
							'url' : '/Archief',
							'urlState' : 'publicates.Archief'
						},
					]
				}
			];


			//Progress tracker object
			Menu.prototype._renderList = _renderList;
			Menu.prototype._getAnchorElements = _getAnchorElements;
			Menu.prototype._attachhandler = _attachhandler;
			Menu.prototype._returnAnchors = _returnAnchors;
			Menu.prototype._goToState = _goToState;

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

				//Cache element for future use -- copy reference of same object in order see the changes in main object as well
				cacheElement = ele;

				//attach handler to all of the anchor tags
				list._getAnchorElements(ele);

			}

			function Menu(data){
				this.data =data;
			}

			//Render list
			function _renderList(arrObj){
				var count = 0,
					arr = arrObj || this.data;

				_html.push('<ul>');
				
				for (var i in arr){

					count = count + 1;

					_html.push(
							'<li>' +
							'<a class="isToggle"' +
							(typeof arr[i].urlState !== "undefined" ? "ui-sref='" + arr[i].urlState + "'" : "") + 
							'><span class="img-circle">' + count + '</span>' +
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

			//Get all anchor elements on which we need to attach handlers
			function _getAnchorElements(ele){
				var anchorELements = angular.element(ele).find("a");

				angular.forEach(anchorELements, function(value, key){
					var anchor = angular.element(value);

					if(anchor.length){
						list._attachhandler(anchor, "click", _commonHandler);
					}		

					//First time visible -- timeout because child element doesnot have click handler yet attached. 
					//So it need to wait for it.
					$timeout(function() {
						if(key === 0){
							anchor.click();
						}	
					});					
				});
			}

			//Event Attach handler
			function _attachhandler(ele, event, fn){
				if (!ele.length && !event.length && typeof fn !== "function"){
					return;
				}

				var element = angular.element(ele);

				//Attach event and handler to element
				element.on(event, fn);
			}

			//Returns anchors which has 'ul' as sibling element
			function _returnAnchors(obj){
				var anchors = [];

				angular.forEach (obj, function (value, key){
					var anchor = angular.element(value),
						nextEle = anchor.next();

					if(nextEle.length){
						anchors.push(anchor);
					}
				});

				return anchors;
			}

			//Click handler for all anchor elements
			function _commonHandler(e){
				console.log('in');
				var _this = angular.element(this),
					nextEle = _this.next(),
					siblingAnchorElement = _this.closest('ul').find(" > li > a.isToggle");

				angular.forEach (siblingAnchorElement, function (value, key){
					var anchor = angular.element(value),
						nextEle = anchor.next();

					if (nextEle.length){
						anchor.removeClass("current");
						nextEle.removeClass("toggle");
					}else {
						anchor.removeClass("current");
					}
				});

				if (nextEle.length){
					_this.addClass("current");
					nextEle.addClass("toggle");
					clickFirstSibling(nextEle);
				}else {
					_this.addClass("current");
				}

				//changeState
				list._goToState(_this);
			}


			function _goToState(ele){
				var ele = angular.element(ele),
					state = ele.attr('ui-sref');

				if(typeof state !== "undefined"){
					console.log(state);
					$state.go(state);
				}

				//typeof state !== "undefined" ? $state.go(state) : "";

			}

			//Handler to click second child element
			function clickFirstSibling(ele){
				var firstElement = angular.element(ele).find("> li > a.isToggle").first();

				if (firstElement.length){
					firstElement.click();
				}
			}
		}
	})();
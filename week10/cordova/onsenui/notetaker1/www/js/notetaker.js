/**
 app.js - main js for NoteTaker app - onsenui
	* attach listener for deviceready event
		* can't add listeners to DOM until event returns successful
		* can't use plugins &c. until returns successful
	* `init` fired after <ons-page> added to DOM
		* then check <ons-page> is required home page
	* then proceed with app...
**/

(function() {

	//cordova - add listener to DOM & check deviceready event
	document.addEventListener('deviceready', function(event) {
		//prevent any bound defaults
		event.preventDefault();
		console.log("cordova checked...device ready");

		//call as onspage added to dom...
		function onsInit(event) {
			//properties - initial page load
			var page = event.target;
			//check IndexedDB
			//checkIDB();
			//set navigation
			onsNav(page);
			//check for home page
			if (page.matches("#home")) {
    		ons.notification.alert('init checked...homepage ready');
				console.log("home page is now attached to the DOM...");
  		} else {
				console.log("away from home page...");
			}
		}

		//onsen - set stack-based navigation
		function onsNav(page) {
			if (page.id === 'home') {
    		page.querySelector('#push-button').onclick = function() {
      		document.querySelector('#navigator').pushPage('create.html', {data: {title: 'Create Note'}});
    		};
  		} else if (page.id === 'create') {
    		page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
				console.log("page title = "+ page.data.title);
  		}
		}

		//onsen - init event is fired after ons-page attached to DOM...
		document.addEventListener('init', onsInit, false);

	}, false);

})();
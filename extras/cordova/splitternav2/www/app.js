/**
 * app.js - js for navigation and splitter test app
 * 	- home page
 * 	- second page (called nav)
 * 	- splitter navigation menu
 *  - fab button and page available on home page
 *  - navigation stack working...
**/

(function() {

	//cordova - add listener to DOM & check deviceready event
	document.addEventListener('deviceready', function(event) {
		//prevent any bound defaults
		event.preventDefault();
		console.log("cordova checked...device ready");

		function onsInit(event) {
			//properties - initial page load
			var page = event.target;
			console.log("page-event="+page.id);
			//load main menu and navigation
			onsMenu(page);
			//check home page
			if (page.id === 'home') {
				//do something...
			}

		}	

/* 
* ons menu - splitter and nav 
*/

		//onsen - main menu
		function onsMenu(page) {
			//main menu
			var menu = document.getElementById('menu');
			//menu link - querySelectorAll due to more than one per page
			var menuLink = document.querySelectorAll('.menu-link');
			//splitter content
			var content = document.getElementById('content');

			//check initial page has actually loaded - forces script to wait before getting menu-open (otherwise returns null...)
			if (page.id === 'home' || page.id === 'nav') {
				console.log("page id = "+page.id);
				//get menu icon - query selector OK due to one per ons page
				var menuOpen = document.querySelector('.menu-open');
				//check menu open is stored...
				if (menuOpen) {
					console.log("menu open stored...");
				}
			
			//add event listener for main menu
				menuOpen.addEventListener('click', function(event) {
				event.preventDefault();
				//open main menu for current page
				menu.open();
				console.log("menu opened...");
			}, false);
			}
			//add handler for menu links
			onsMenuLink(page, menuLink, menu);
			//set navigation
			onsNav(page);
		}		

		//onsen - menu links
		function onsMenuLink(page, menuLink, menu) {
			if (page.id === 'menu.html') {
				console.log("menu target...");
				//add listener per menu link
				Array.from(menuLink).forEach(link => {
					link.addEventListener('click', function(event) {
					event.preventDefault();
					var url = this.getAttribute('url');
					console.log("menu link = "+ url);
					content.load(url)
    			.then(menu.close.bind(menu));
					}, false);
				});
			}
		}

		//onsen - set stack-based navigation
		function onsNav(page) {
			console.log('onsNav page.id='+page.id);
			if (page.id === 'home') {
    		page.querySelector('#fab-open').onclick = function() {
      		document.querySelector('#navigator').pushPage('fab.html', {data: {title: 'fab page'}});
					console.log("push page title");
    		};
  		} else if (page.id === 'fab') {
    		page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
				console.log("page title = "+page.data.title);
  		}
		}

		//onsen - init event is fired after ons-page attached to DOM...
		document.addEventListener('init', onsInit, false);

	}, false);

})();
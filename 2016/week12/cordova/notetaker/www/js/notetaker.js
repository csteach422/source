/**
 notetaker.js - main js for NoteTaker app - onsenui
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

/*
* indexedDB - properties and setup
*/
		//set variables for IndexedDB...
		var indexedDBSupport = false;
		var db;
		//check indexeddb support
		if("indexedDB" in window) {
			indexedDBSupport = true;
    	console.log("IndexedDB supported...");
  	} else {
    	console.log("No support...");
			//might add option to gracefully close or use another localstorage option..,
  	}

/*
* hardware buttons - android backbutton
*/
		// disable or enable hardware backbutton on Android
		ons.disableDeviceBackButtonHandler();
		//ons.enableDeviceBackButtonHandler();

		// set custom backbutton handler
		ons.setDefaultDeviceBackButtonListener(function(event) {
  		ons.notification.confirm('Exit app?') // check with user
  		.then(function(index) {
    		if (index === 1) { // 'ok' button
      		navigator.app.exitApp(); // default behaviour - exit app
    		}
  		});
		});

		//call as onspage added to dom...
		function onsInit(event) {
			//properties - initial page load
			var page = event.target;
			console.log("page-event="+page.id);
			//load main menu and navigation
			onsMenu(page);
			//create note
			createNote(page);
		}

/* 
* ons menu - splitter and nav 
*/

		//onsen - main main
		function onsMenu(page) {
			//main menu
			var menu = document.getElementById('menu');
			//menu link - querySelectorAll due to more than one per page
			var menuLink = document.querySelectorAll('.menu-link');
			//splitter content
			var content = document.getElementById('content');

			//check initial page has actually loaded - forces script to wait before getting menu-open (otherwise returns null...)
			if (page.id == 'home' || page.id === 'tags') {
				console.log("page id = "+page.id);
				//get menu icon - query selector OK due to one per ons page
				var menuOpen = document.querySelector('.menu-open');
				//check menu open is stored...
				if (menuOpen) {
					console.log("menu open stored...");
				}
			//check home page - load navigator...
			if (page.id === 'home') {
				//set navigation
				onsNav(page);
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
			if (page.id === 'home') {
    		page.querySelector('#create-note').onclick = function() {
      		document.querySelector('#navigator').pushPage('create.html', {data: {title: 'Create Note'}});
    		};
  		} else if (page.id === 'create') {
    		page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
				console.log("page title = "+ page.data.title);
  		}
		}

/*
* create note
*/

	function createNote(page) {
		//note save handler - check create note page is active...
		if (page.id === "create") {
			console.log("ready to save note...");
			document.getElementById('noteSave').addEventListener('click', function(event) {
				//prevent any bound defaults
				event.preventDefault();
				console.log("save note button clicked...");
				//get values for note - title, content, tags
				var noteTitle = document.getElementById('noteTitle').value;
				var noteContent = document.getElementById('noteContent').value;
				var noteTags = document.getElementById('noteTags').value;
				console.log("note = "+noteTitle+", "+noteContent+", "+noteTags);
				saveNote(noteTitle, noteContent, noteTags);
			});
		}
	}

/* 
* storage - indexedb 
*/
		//if indexeddb supported in app's browser
		if(indexedDBSupport) {
        var openDB = indexedDB.open("notetaker",1);
				//use upgrade event
        openDB.onupgradeneeded = function(e) {
            console.log("DB upgrade...");
						//local var for db upgrade
						var upgradeDB = e.target.result;
						//check object store in current db
						if (!upgradeDB.objectStoreNames.contains("ntos")) {
							//create object store
							var dataStore = upgradeDB.createObjectStore("ntos", { autoIncrement: true });
							//specify index
							dataStore.createIndex("note","note", {unique:false});
							console.log("new object store created...");
							console.log("new index created");
						}
        }
				//db success event
        openDB.onsuccess = function(e) {
            console.log("DB success...");
            db = e.target.result;
        }
        //db error event
        openDB.onerror = function(e) {
            console.log("DB error...");
            console.dir(e);
        }
			}

			//save note data to indexeddb
			function saveNote(title, content, tags){
				//split tags by comma or space
				var tagSplit = tags.split(/[ ,]+/);

				//define a note
				var note = {
					title:title,
				  note:content,
					tags:tagSplit
				}
				// create transaction
				var dbTransaction = db.transaction(["ntos"],"readwrite");
				// define data object store
				var dataStore = dbTransaction.objectStore("ntos");
				// add data to store
				var addRequest = dataStore.add(note);
				// success handler
				addRequest.onsuccess = function(e) {
				  console.log("data stored...");
				  //update user on note stored
					ons.notification.confirm('Return to notes?') // check with user
  				.then(function(index) {
    				if (index === 1) { // 'ok' button
      				document.querySelector('#navigator').popPage(); // return to previous page
    				} else if (index === 0) { // check 'cancel' button
							document.querySelector('#navigator').replacePage('create.html', {'animation': 'none'});
						}
  				});
				}
				// error handler
				addRequest.onerror = function(e) {
				console.log(e.target.error.name);
				// handle error...
				}
			}

		//onsen - init event is fired after ons-page attached to DOM...
		document.addEventListener('init', onsInit, false);

	}, false);

})();
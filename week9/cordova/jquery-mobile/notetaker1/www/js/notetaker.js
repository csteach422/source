(function() {
	//check for page initialisation and #home - page init for jQuery mobile
	$(document).on("pageinit", "#home", function(e) {
		//prevent any bound defaults
		e.preventDefault();

		//loader function after deviceready event returns
		function onDeviceReady() {

			//set variable for IndexedDB support
			var indexedDBSupport = false;
			//use for adding data...
			var db;
		 	//check IndexedDB support
			if("indexedDB" in window) {
				indexedDBSupport = true;
		  	console.log("IndexedDB supported...");
		  } else {
		  	console.log("No support...");
		  }

			

		}

		//as deviceready returns load onDeviceReady()
		$(document).on("deviceready", onDeviceReady);
	});

})();

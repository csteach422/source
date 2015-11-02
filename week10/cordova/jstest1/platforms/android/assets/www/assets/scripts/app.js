(function() {
	//check for page initialisation and #home - page init for jQuery mobile
	$(document).on("pageinit", "#home", function(e) {
		//prevent any bound defaults
		e.preventDefault();

		//loader function after deviceready event returns
		function onDeviceReady() {

			//handle button press for file write
			$("#loadJSON").on("tap", function(e) {
				e.preventDefault();
				processNotes();
			});

		}

		//as deviceready returns load onDeviceReady()
		$(document).on("deviceready", onDeviceReady);
	});

})();

(function() {
	//check for page initialisation and #home - page init for jQuery mobile
	$(document).on("pageinit", "#home", function(e) {
		//prevent any bound defaults
		e.preventDefault();

		//loader function after deviceready event returns
		function onDeviceReady() {

		alert("device is ready");

		//handle button press for daily note - direct
		$("#dayNote").on("tap", function(e) {
			e.preventDefault();
			console.log("request daily note...");
			var note = test.dailyNote();
			var noteOutput = "Today's fun note: "+note;
			console.log(noteOutput);
		});

		//handle button press for daily note - async
		$("#dayNoteSync").on("tap", function(e) {
			e.preventDefault();
			console.log("daily note async...");
			var noteSync = test.dailyNoteCall(noteCallback);
		});

		function noteCallback(res) {
			console.log("starting daily note callback");
			var noteOutput = "Today's fun asynchronous note: "+ res;
			console.log(noteOutput);
		}

		}

		//as deviceready returns load onDeviceReady()
		$(document).on("deviceready", onDeviceReady);
	});

})();

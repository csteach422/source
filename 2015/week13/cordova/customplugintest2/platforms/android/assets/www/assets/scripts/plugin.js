(function() {
	//check for page initialisation and #home - page init for jQuery mobile
	$(document).on("pageinit", "#home", function(e) {
		//prevent any bound defaults
		e.preventDefault();

		//loader function after deviceready event returns
		function onDeviceReady() {

		alert("device is ready");

		//handle button press for daily note - direct
		$("#testButton").on("tap", function(e) {
			e.preventDefault();
			console.log("request daily note...");
			var note = $("#noteField").val();
			console.log("requested note = "+note);
			if (note === "") {
				return;
			}
			window.test2.getNote(note,
				function(result) {
					console.log("result = "+result);
					$("#note-output").html(result);
				},
				function(error) {
					console.log("error = "+error);
					$("#note-output").html("Note error: "+error);
				}
			);
		});

		}

		//as deviceready returns load onDeviceReady()
		$(document).on("deviceready", onDeviceReady);
	});

})();

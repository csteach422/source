(function() {
	//check for page initialisation and #home
	$(document).on("pageinit", "#home", function(e) {
		//prevent any bound defaults
		e.preventDefault();

		//loader function after deviceready event returns
		function onDeviceReady() {
			//play audio
			$("#playAudio").on("tap", function(e) {
				//audio playback logic
				e.preventDefault();
				playAudio();
			});
			//play audio file
			function playAudio() {
				var $audioURL = buildURL("media/audio/egypt.mp3");
				var $audio = new Media($audioURL, null, errorReport);
				$audio.play();
				//just for testing
				alert("playing audio...have fun!");
			}
			//build url for android
			function buildURL(file) {
				if (device.platform.toLowerCase() === "android") {
					var $androidFile = "/android_asset/www/" + file;
					return $androidFile;
				}
			}
			//return any error message from media playback
			function errorReport(error) {
				alert("Error with Audio - " + JSON.stringify(error));
			}

		}
		//as deviceready returns load onDeviceReady()
		$(document).on("deviceready", onDeviceReady);
	});

})();

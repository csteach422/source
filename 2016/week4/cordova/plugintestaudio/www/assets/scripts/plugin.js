(function() {

	//check for page initialisation and #home
	$(document).on("pageinit", "#home", function(e) {
		//prevent any bound defaults
		e.preventDefault();

		//loader function after deviceready event returns
		function onDeviceReady() {
		//set initial properties
		var $audio;
		var $audioPosn = 0;
			/*
				control buttons
					- play, stop, & pause...
			*/
			//button - play audio
			$("#playAudio").on("tap", function(e) {
				//play audio logic
				e.preventDefault();
				playAudio();
			});
			//button - stop audio
			$("#stopAudio").on("tap", function(e) {
				//stop audio logic
				e.preventDefault();
				//call custom method to handle stopping audio...
				stopAudio();
			});
			//button - pause audio
			$("#pauseAudio").on("tap", function(e) {
				//pause audio logic
				e.preventDefault();
				//call custom method to handle pausing audio...
				pauseAudio();
			});

			/*
				media logic
					- play, stop, pause...
			*/
			//play audio file
			function playAudio() {
				var $audioURL = buildURL("media/audio/egypt.mp3");
				//set value for $audio
				$audio = new Media($audioURL, null, errorReport);
				//check current audio position
				if ($audioPosn > 1) {
					$audio.seekTo($audioPosn*1000);
					$audio.play();
					alert("playback position: " + $audioPosn + " secs");
				} else {
					$audio.play();
					alert("playback position: start...");
				}
			}
			//stop audio file
			function stopAudio() {
				//stop audio playback
				$audio.stop();
				//reset $audioPosn
				$audioPosn = 0;
				//release audio - important for android resources...
				$audio.release();
				//just for testing
				alert("stop playing audio...& release!");
			}
			//pause audio file
			function pauseAudio() {
				//pause audio playback
				$audio.pause();

    		$audio.getCurrentPosition(
        	// success callback
        	function (position) {
            if (position > -1) {
							$audioPosn = position;
              alert("pause playback at position: " + position + " secs");
            }
        	},
        	// error callback
        	function (e) {
            alert("Error getting pos=" + e);
        	}
    		);

			}

			/*
				helper logic
					- build url for files...
					- basic error reporting...
			*/
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

(function() {
	//check for page initialisation and #home - page init for jQuery mobile
	$(document).on("pageinit", "#home", function(e) {
		//prevent any bound defaults
		e.preventDefault();

		//loader function after deviceready event returns
		function onDeviceReady() {
		//set initial properties
		var $watchState = "off";
		var watchID;

			function onSuccess(location) {
				//location recording time
				var locationTime = Date(location.timestamp);
				//device's latitude
				var myLatitude = location.coords.latitude;
				//device's longitude
				var myLongitude = location.coords.longitude;
				//device's altitude - depends on device specs and support
				var myAltitude = location.coords.altitude;
				//device's heading - depends on device specs and support
				var myHeading = location.coords.heading;
				//output test to console...
				console.log("found location successfully!")
				//output result to #location div...
				$("#geolocation").append("<p>my latitude = "+myLatitude+"</p><p>my longitude = "+myLongitude+"</p>");
				$("#geolocation").append("<p>my current heading = "+myHeading+" at an altitude of "+myAltitude+"</p>");
				$("#geolocation").append("<p>location results recorded at "+locationTime+"</p>");
			}

			function onFail(error) {
				$("#geolocation").append("location error code = "+error.code+" message = "+error.message);
			}

			function getLocation() {
				navigator.geolocation.getCurrentPosition(onSuccess,
					onFail, {
					timeout: 30000,
					maximumAge: 20000,
					enableHighAccuracy: true
				});
			}

			function getWatchID() {
				watchID = navigator.geolocation.watchPosition(onSuccess,
					onFail, {
					enableHighAccuracy: true
 				});
			}

			//handle button press for geolocation
			$("#getLocation").on("tap", function(e) {
				e.preventDefault();
				console.log("get location...");
				$("#geolocation").empty();
				getLocation();
			});

			//handle button press for geolocation
			$("#getLocationRefresh").on("tap", function(e) {
				e.preventDefault();
				console.log("get location refresh...");

			});

			$("#setWatch").on("change", function(e) {
				e.preventDefault();
				//get state of toggle
				$watchState = $(this).val();
				//output check of toggle state
				console.log("watch state is now set to "+$watchState);
				//check state of toggle
				if ($watchState === "on") {
					//call function to start watching...
					getWatchID();
					//output check of watchID
					console.log("watchID = "+watchID);
				} else {
					$("#geolocation").empty();
					//clear the location watching - stops location tracking...
					navigator.geolocation.clearWatch(watchID);
					//output check of watchID - check match against on watchID...
					console.log("clear watch..."+watchID);
				}
			});

		}

		//as deviceready returns load onDeviceReady()
		$(document).on("deviceready", onDeviceReady);
	});

})();

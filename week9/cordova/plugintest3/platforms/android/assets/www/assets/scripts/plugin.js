(function() {
	//check for page initialisation and #home - page init for jQuery mobile
	$(document).on("pageinit", "#home", function(e) {
		//prevent any bound defaults
		e.preventDefault();

		//loader function after deviceready event returns
		function onDeviceReady() {

			function onSuccess(location) {
				//location recording time
				var locationTime = Date(location.timestamp);
				//device's latitude
				var myLatitude = location.coords.latitude;
				//device's longitude
				var myLongitude = location.coords.longitude;
				//device's altitude
				var myAltitude = location.coords.altitude;
				//device's heading
				var myHeading = location.coords.heading;
				//output test to console...
				console.log("found location successfully!")
				//output result to #location div...
				$("#location").append("<p>my latitude = "+myLatitude+"</p><p>my longitude = "+myLongitude+"</p>");
				$("#location").append("<p>my current heading = "+myHeading+" at an altitude of "+myAltitude+"</p>");
				$("#location").append("<p>location results recorded at "+locationTime+"</p>");
			}

			function onFail(error) {
				$("#location").append("location error code = "+error.code+" message = "+error.message);
			}

			function getLocation() {
				navigator.geolocation.getCurrentPosition(onSuccess,
					onFail, {
					timeout: 15000,
					enableHighAccuracy: true
				});
			}

			//handle button press for geolocation
			$("#getLocation").on("tap", function(e) {
				e.preventDefault();
				getLocation();
			})

		}

		//as deviceready returns load onDeviceReady()
		$(document).on("deviceready", onDeviceReady);
	});

})();

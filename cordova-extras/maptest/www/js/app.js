/**
 * app.js - js for test maps app...
 */

(function() {

	//cordova - add listener to DOM & check deviceready event
	document.addEventListener('deviceready', function(event) {
		//prevent any bound defaults
		event.preventDefault();
		console.log("cordova checked...device ready");

		//onsen - init event is fired after ons-page attached to DOM...
		document.addEventListener('init', onsInit, false);

		function onsInit(e) {
			var page = e.target.id;
			console.log("page-event="+page);
			getLocation();
		}

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
				console.log("found location successfully!");
				//output result to #location div...
				var locationDiv = document.getElementById("location");
				locationDiv.innerHTML = "<p>my latitude = "+myLatitude+"</p><p>my longitude = "+myLongitude+"</p>";
				//build map with current latitude and longitude
				buildMap(myLatitude, myLongitude);
			}

			function onFail(error) {
				document.getElementById("location").innerHTML = "location error code = "+error.code+" message = "+error.message;
			}

			function getLocation() {
				navigator.geolocation.getCurrentPosition(onSuccess,
					onFail, {
					timeout: 15000,
					enableHighAccuracy: true
				});
			}

			function buildMap(lat, long) {
				//set combined position for user
				var latlong = new google.maps.LatLng(lat, long);
				//set required options
				var mapOptions = {
					center: latlong,
					zoom: 12,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};
				//build map in map div...
				var map = new google.maps.Map(document.getElementById("map"), mapOptions);
				//add initial location marker
				var marker = new google.maps.Marker({position: latlong,map: map});
			}

	}, false);

})();

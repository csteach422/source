/**
 * app.js - js for network information test app
**/

(function() {

	//cordova - add listener to DOM & check deviceready event
	document.addEventListener('deviceready', function(event) {
		//prevent any bound defaults
		event.preventDefault();
		console.log("cordova checked...device ready");

		//add listeners for network connection status
		document.addEventListener("offline", offlineState, false);
		document.addEventListener("online", onlineState, false);

		function onsInit(event) {
			//properties - initial page load
			var page = event.target;
			console.log("page-event="+page.id);			
			//check home page
			if (page.id === 'home') {

			}
		}

		//handle offline network state
		function offlineState() {
			//handle offline network state
			console.log("app is now offline");
			//show ons alert dialog...
			ons.notification.alert('your app is now offline...');
		}

		//handle online network state
		function onlineState() {
			// Handle the online event
    	var networkState = navigator.connection.type;
			console.log('Connection type: ' + networkState);
    	if (networkState !== Connection.NONE) {
        //use connection state to update app, save data &c.
    	}
    	ons.notification.alert('Connection type: ' + networkState);
		}

		function checkConnection() {
    	var networkState = navigator.connection.type;
			console.log('check connection requested...');
    	var states = {};
    	states[Connection.UNKNOWN]  = 'Unknown connection';
    	states[Connection.ETHERNET] = 'Ethernet connection';
    	states[Connection.WIFI]     = 'WiFi connection';
    	states[Connection.CELL_2G]  = 'Cell 2G connection';
    	states[Connection.CELL_3G]  = 'Cell 3G connection';
    	states[Connection.CELL_4G]  = 'Cell 4G connection';
    	states[Connection.CELL]     = 'Cell generic connection';
    	states[Connection.NONE]     = 'No network connection';

			console.log('Connection type: ' + states[networkState]);
    	ons.notification.alert('Connection type: ' + states[networkState]);
		}

		//listener for check network connection buttoon
		document.getElementById('checkNetwork').addEventListener('click', checkConnection, false);

		//onsen - init event is fired after ons-page attached to DOM...
		document.addEventListener('init', onsInit, false);
	}, false);

})();
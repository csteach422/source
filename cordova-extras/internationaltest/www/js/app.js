/**
 * app.js - js for international test app
**/

(function() {

	//cordova - add listener to DOM & check deviceready event
	document.addEventListener('deviceready', function(event) {
		//prevent any bound defaults
		event.preventDefault();
		console.log("cordova checked...device ready");

		//ons init for page
		function onsInit(event) {
			//properties - initial page load
			var page = event.target;
			console.log("page-event="+page.id);			
			//check home page
			if (page.id === 'home') {
				//check user's defined language
				/*navigator.globalization.getPreferredLanguage (
  				//set success and error callbacks...
  				function(language) {
    				console.log('language = '+language.value);
						//show ons alert dialog...
						ons.notification.alert('language = '+language.value);
  				}, function() {
    				console.log('error with language check...');
  				}
				);*/
				//check user's defined locale
				/*navigator.globalization.getLocaleName (
  				//set success and error callbacks...
  				function(locale) {
    				console.log('locale = '+locale.value);
						//show ons alert dialog...
						ons.notification.alert('locale = '+locale.value);
  				}, function() {
    				console.log('error with locale check...');
  				}
				);*/

				//check date &c. relative to defined locale
				navigator.globalization.dateToString(
    			new Date(),
    			function (date) { 
						ons.notification.alert('date: ' + date.value + '\n'); 
					}, function () { 
						ons.notification.alert('Error getting dateString\n'); 
					},
    			{ formatLength: 'short', selector: 'date and time' }
				);

			}
		}

		//onsen - init event is fired after ons-page attached to DOM...
		document.addEventListener('init', onsInit, false);
	}, false);

})();
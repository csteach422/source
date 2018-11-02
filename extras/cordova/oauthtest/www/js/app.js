/**
 * app.js - js for oauth 2.0 test app
**/

(function() {

	//cordova - add listener to DOM & check deviceready event
	document.addEventListener('deviceready', function(event) {
		//prevent any bound defaults
		event.preventDefault();
		console.log("cordova checked...device ready");

		function onsInit(event) {
			//properties - initial page load
			var page = event.target;
			console.log("page-event="+page.id);

			//check home page
			if (page.id === 'home') {
				//do something...
			}

		}


// Google oauth2 service - uses jquery plugin cordova.oauth2.js
function auth_login() {
    $.oauth2({
        auth_url: 'https://accounts.google.com/o/oauth2/auth',
        response_type: 'token',
        logout_url: 'https://accounts.google.com/logout',
        client_id: 'ADD_YOUR_CLIENT_ID.apps.googleusercontent.com', // add your app's client_id
        redirect_uri: 'http://localhost/', // add your app's redirect uri
        other_params: {scope: 'profile'}
    }, function(token, response){
        // do something with token or response
        $("#returnOutput").append("<p class='success'><b>access_token: </b>"+token+"</p>");
        $("#returnOutput").append("<p class='success'><b>response: </b>"+JSON.stringify(response)+"</p>");
    }, function(error, response){
        // do something with error object
        $("#returnOutput").append("<p class='error'><b>error: </b>"+JSON.stringify(error)+"</p>");
        $("#returnOutput").append("<p class='error'><b>response: </b>"+JSON.stringify(response)+"</p>");
    });
}
		//event listener for auth click button
		document.getElementById('authorise').addEventListener('click', auth_login, false);

		//onsen - init event is fired after ons-page attached to DOM...
		document.addEventListener('init', onsInit, false);

	}, false);

})();

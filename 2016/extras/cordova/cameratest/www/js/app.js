/**
 * app.js - js for onsenui test camera app...
 */

(function() {

	//cordova - add listener to DOM & check deviceready event
	document.addEventListener('deviceready', function(event) {
		//prevent any bound defaults
		event.preventDefault();
		console.log("cordova checked...device ready");

		//onsen - init event is fired after ons-page attached to DOM...
		document.addEventListener('init', onsInit, false);

		var map;

		function onsInit(e) {
			var page = e.target.id;
			console.log("page-event="+page);

			document.getElementById("cameraPhoto").addEventListener('click', getPhoto, false);

		}

		function onSuccess(imageData) {
			console.log('success - js call');
			//JS selector call is slightly faster...
			var image = document.getElementById('imageView');
			image.src = imageData;
			console.log(imageData);
		}

		function onFail(message) {
			console.log('Failed because: ' + message);
		}

		function getPhoto() {
				//Use from Camera
					navigator.camera.getPicture(onSuccess, onFail, {
						quality: 50,
						correctOrientation: true,
						sourceType: Camera.PictureSourceType.CAMERA,
						destinationType: Camera.DestinationType.FILE_URI
					});
			console.log("camera button clicked...");
		}


	}, false);

})();

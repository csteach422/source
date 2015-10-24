(function() {
	//check for page initialisation and #home - page init for jQuery mobile
	$(document).on("pageinit", "#home", function(e) {
		//prevent any bound defaults
		e.preventDefault();

		//loader function after deviceready event returns
		function onDeviceReady() {

			function onSuccess(imageData) {
				console.log('success - js call');
				//JS selector call is slightly faster...
				var image = document.getElementById('imageView');
				image.src = imageData;
				console.log(imageData);
			}

			function onFail(message) {
				alert('Failed because: ' + message);
			}

			function getPhoto(camera) {
				if (camera === true) {
					//Use from Camera
						navigator.camera.getPicture(onSuccess, onFail, {
							quality: 50,
							correctOrientation: true,
							sourceType: Camera.PictureSourceType.CAMERA,
							destinationType: Camera.DestinationType.FILE_URI
						});
				}
				else {
					navigator.camera.getPicture(onSuccess, onFail, {
						sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
						destinationType: Camera.DestinationType.FILE_URI
					});
				}
			}



			$("#takePhoto").on("tap", function(e) {
				e.preventDefault();
				//show popup options for camera
				$("#photoSelector").popup("open");
			})

			$("#cameraPhoto").on("tap", function(e) {
				e.preventDefault();
				//hide popup options for camera
				$("#photoSelector").popup("close");
				//call getPhoto() to access native device's camera
				getPhoto(true);
			})

			$("#galleryPhoto").on("tap", function(e) {
				e.preventDefault();
				//hide popup options for camera
				$("#photoSelector").popup("close");
				getPhoto(false);
			})

		}

		//as deviceready returns load onDeviceReady()
		$(document).on("deviceready", onDeviceReady);
	});

})();

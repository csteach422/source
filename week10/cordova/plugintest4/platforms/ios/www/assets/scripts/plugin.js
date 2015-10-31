(function() {
	//check for page initialisation and #home - page init for jQuery mobile
	$(document).on("pageinit", "#home", function(e) {
		//prevent any bound defaults
		e.preventDefault();

		//loader function after deviceready event returns
		function onDeviceReady() {

			console.log(cordova.file.applicationDirectory);

	//This alias is a read-only pointer to the app itself
	window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + "www/docs/txt/test.txt", onSuccess, onFail);


			function onSuccess(data) {
				data.file(function(file) {
					var reader = new FileReader();

					reader.onloadend = function(e) {
						console.log("Text is: "+this.result);
						document.querySelector("#file-test").innerHTML = this.result;
					}

					reader.readAsText(file);
				});
			}

			function onFail(error) {
				console.log("FileSystem Error");
				console.dir(error);
			}

			function getLocation() {

			}

			//handle button press for geolocation
			$("#getLocation").on("tap", function(e) {

			})

		}

		//as deviceready returns load onDeviceReady()
		$(document).on("deviceready", onDeviceReady);
	});

})();

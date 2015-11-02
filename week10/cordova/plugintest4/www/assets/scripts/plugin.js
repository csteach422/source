(function() {
	//check for page initialisation and #home - page init for jQuery mobile
	$(document).on("pageinit", "#home", function(e) {
		//prevent any bound defaults
		e.preventDefault();

		//loader function after deviceready event returns
		function onDeviceReady() {

			console.log(cordova.file.applicationDirectory);


			function onSuccess(data) {
				data.file(function(file) {
					var readFile = new FileReader();

					readFile.onloadend = function(e) {
						//use jQuery selector to add returned file data
						$("#file-output").html('text = '+this.result);
					}
					readFile.readAsText(file);
				});
			}

			function onFail(error) {
				switch(error.code) {
      		case 1:
        	alert('File Not Found!');
        	break;
      		//add other options to cover additional error codes...
      		default:
        	alert('An error occurred reading this file.');
    		};
			}

			function getTxtFile() {
				//read-only pointer to the app itself
				window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + "www/docs/txt/madeira.txt", onSuccess, onFail);
			}

			//handle button press for file load
			$("#getFile").on("tap", function(e) {
				e.preventDefault();
				getTxtFile();
			});

		}

		//as deviceready returns load onDeviceReady()
		$(document).on("deviceready", onDeviceReady);
	});

})();

(function() {
	//check for page initialisation and #home - page init for jQuery mobile
	$(document).on("pageinit", "#home", function(e) {
		//prevent any bound defaults
		e.preventDefault();

		//loader function after deviceready event returns
		function onDeviceReady() {

		 var fileDir = cordova.file.dataDirectory;

				window.resolveLocalFileSystemURL(fileDir, function(dir) {
					dir.getFile("madeira.txt", {create:true}, function(file) {
						console.log("write file = ", file);
						//hoist variable to global as needed
						writeObj = file;
					});
				});


			function writeTxtFile(data) {
				//get the file so we can work it in the app
				if (data !== "") {
					//new text to write to file
					var text = data;
					console.log("text to write = "+text);
					//use write file object
					writeObj.createWriter(function(writeFile) {
						writeFile.seek(writeFile.length);
						var textBlob = new Blob([text], {type:'text/plain'});
						writeFile.write(textBlob);
						alert(text+" written to file");
						console.log("should be ok....");
					});
				}
			}

			//handle button press for file write
			$("#saveFile").on("tap", function(e) {
				e.preventDefault();
				writeTxtFile("some initial basic text for writing to our file...");
			});

		}

		//as deviceready returns load onDeviceReady()
		$(document).on("deviceready", onDeviceReady);
	});

})();

(function() {
	//check for page initialisation and #home - page init for jQuery mobile
	$(document).on("pageinit", "#home", function(e) {
		//prevent any bound defaults
		e.preventDefault();

		//loader function after deviceready event returns
		function onDeviceReady() {

			//set variable for IndexedDB support
			var indexedDBSupport = false;
			//use for adding data...
			var db;
		 	//check IndexedDB support
			if("indexedDB" in window) {
				indexedDBSupport = true;
		  	console.log("IndexedDB supported...");
				alert("yes, support available...");
		  } else {
		  	console.log("No support...");
		  }

			if(indexedDBSupport) {
        var openDB = indexedDB.open("422test",2);
        openDB.onupgradeneeded = function(e) {
            console.log("DB upgrade...");
						//local var for db upgrade
						var upgradeDB = e.target.result;
						if (!upgradeDB.objectStoreNames.contains("422os")) {
							var dataStore = upgradeDB.createObjectStore("422os", { autoIncrement: true });
							dataStore.createIndex("note","note", {unique:false});
							console.log("new object store created...");
							console.log("new index created");
						}
						if (!upgradeDB.objectStoreNames.contains("422os2")) {
							var datastore = upgradeDB.createObjectStore("422os2", { autoIncrement: true });
							console.log("new object store 2 created...");
						}
        }
        openDB.onsuccess = function(e) {
            console.log("DB success...");
            db = e.target.result;
        }
        openDB.onerror = function(e) {
            console.log("DB error...");
            console.dir(e);
        }
			}

			//save note data to indexeddb
			function saveNote(title, content){
				//define a note
				var note = {
					title:title,
				  note:content
				}
				// create transaction
				var dbTransaction = db.transaction(["422os"],"readwrite");
				// define data object store
				var dataStore = dbTransaction.objectStore("422os");
				// add data to store
				var addRequest = dataStore.add(note);
				// success handler
				addRequest.onsuccess = function(e) {
				  console.log("data stored...");
				  // do something...
				}
				// error handler
				addRequest.onerror = function(e) {
				console.log(e.target.error.name);
				// handle error...
				}
			}

			function loadNoteData(key) {
				// create transaction
				var dbTransaction = db.transaction(["422os"],"readonly");
				// define data object store
				var dataStore2 = dbTransaction.objectStore("422os");
				// request value - use defined key
				var object1 = dataStore2.get(key);
				// do something with return
				object1.onsuccess = function(e) {
					var result = e.target.result;
					//output to console for testing
					console.dir(result);
					console.log("found value...");
				}
			}

			function loadNotes() {
				// create transaction
				var dbTransaction = db.transaction(["422os"],"readonly");
				// define data object store
				var dataStore3 = dbTransaction.objectStore("422os");
				var cursor = dataStore3.openCursor();
				// do something with return...
				cursor.onsuccess = function(e) {
					var result = e.target.result;
					if (result) {
						console.log("422 notes", result.value);
				    console.log("422 notes", result.key);
						console.dir(result);
				    result.continue();
					}
				}
			}

			function queryData() {
				// create transaction
				var dbTransaction = db.transaction(["422os"],"readonly");
				// define data object store
				var dataStore4 = dbTransaction.objectStore("422os");
				//define index
				var dataIndex = dataStore4.index("note");
				var note = "Capital of Madeira";
				var request = dataIndex.get(note);
				console.dir(request);
			}

			//handle save button
			$("#saveNote").on("tap", function(e) {
				e.preventDefault();
				var noteTitle = $("#noteName").val();
				var noteContent = $("#noteContent").val();
				saveNote(noteTitle, noteContent);
			});

			// handler for load note button
	    $("#loadNote").on("tap", function(e) {
	      e.preventDefault();
	      loadNoteData(1);
	    });

			// handler for load note button
	    $("#loadNotes").on("tap", function(e) {
	      e.preventDefault();
	      loadNotes();
				queryData()
	    });

		}

		//as deviceready returns load onDeviceReady()
		$(document).on("deviceready", onDeviceReady);
	});

})();
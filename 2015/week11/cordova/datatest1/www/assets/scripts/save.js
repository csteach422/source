(function() {

var storageNotes = NotesManager.getInstance();
var NOTE_KEY = "noteTest.noteInfo";

	//check for page initialisation and #home
	$(document).on("pageinit", "#home", function(e) {
		//prevent any bound defaults
		e.preventDefault();

    // handler for save note button
    $("#saveNote").on("tap", function(e) {
      e.preventDefault();
      //check form is valid
      if (! $("#noteForm").valid()) {
        return;
      }
      //store notes
      storageNotes.set(NOTE_KEY, JSON.stringify({
          noteName: $("#noteName").val(),
          noteContent: $("#noteContent").val()
      })
     );
     // inform user note saved
     $("#saveResult").html("note saved...");
    });

    // handler for reload note button
    $("#reloadNote").on("tap", function(e) {
      e.preventDefault();
      reloadNoteData();
      $("#saveResult").html("note reloaded...");
    });

        $("#noteForm").validate({
          rules: {
            noteName: "required",
            noteContent: "required"
          },
          messages: {
            noteName: "Add title for note",
            noteContent: "Add your note"
          }
        });

	});//end of pageinit

  function reloadNoteData() {
    var noteInfo = JSON.parse(storageNotes.get(NOTE_KEY));
    loadFormFields(noteInfo);
    noteOutput(noteInfo);
  }

  function loadFormFields(data) {
    if (data) {
      $("#noteName").val(data.noteName);
      $("#noteContent").val(data.noteContent);
    }
  }

  function noteOutput(data) {
    if (data) {
      $("#note-output").append("<h5>"+data.noteName+"</h5><p>"+data.noteContent+"</p>");

    }
  }

})();

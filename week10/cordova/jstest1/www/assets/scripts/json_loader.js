    //get the notes JSON
    function getNotes() {
        //return limited deferred promise object
        var $deferredNotesRequest = $.getJSON (
          "docs/json/madeira.json",
          {format: "json"}
        );
        return $deferredNotesRequest;
    }

    function buildNote(data) {
        //create each note's <p>
        var p = $("<p>");
        //add note text
        p.html(data);
        //append to DOM
        $("#note-output").append(p);
    }

    function processNotes(){
      $.when(getNotes()).done(function(response) {
        //get travelNotes
        var $travelNotes = response.travelNotes
        //process travelNotes array
        $.each($travelNotes, function(i, item) {
          if (item !== null) {
            var note = item.note;
            console.log(note);
            buildNote(note)
          }
        });
        console.log("done..."+response.travelNotes[0].note);
      });
    }

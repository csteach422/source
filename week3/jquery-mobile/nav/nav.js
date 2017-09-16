(function( $ ) {
  // On document ready
  $(function() {

    // Bind to the click of the example link
    $( "#nav-bar" ).click(function( event ) {
      // Append #bar
      $.mobile.navigate( "#nav1", {
        info: "info about the #nav1 hash"
      });

      // Replace #bar with #baz
      $.mobile.navigate( "#baz" );

      // Log the results of the navigate event
      $( window ).on( "navigate", function( event, data ){
        console.log( data.state.info );
        console.log( data.state.direction );
        console.log( data.state.url );
        console.log( data.state.hash );
      });

      // Go back to pop the state for #bar and log it
      window.history.back();
    });
  });
})( jQuery );

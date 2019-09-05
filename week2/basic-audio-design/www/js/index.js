/*
* index.js - default JS for app
*/

/*
* FN: loader for the main app
* - check deviceready event
* - bootstrap app loading & events
*/
function onLoad() {
  // Add the deviceready event
  document.addEventListener("deviceready", function(){

  // attach test events
  document.addEventListener("pause", onPause, false); // pause event
  document.addEventListener("resume", onResume, false); // resume event

  // setup handlers for slide content events
  slideEvents();
  // setup for handlers for player buttons
  player();
  // basic modal handler
  modal();

  }, false);

}

// FN: call in response to Pause event
function onPause() {

    // show alert in native UI
    //alert('audio player paused');
}

// FN: call in response to Resume event
function onResume() {

    // show alert in native UI
    //alert('audio player resumed');
}

// FN: call handlers for slide links...
function slideEvents() {
  // get all anchor elements relative to #slideLinks
  const slideLinks = document.querySelectorAll('#slideLinks a');
  slideHandlers(slideLinks);
}

// FN: call handlers for modal events...
function modal() {
  // get nodes with modal class
  const modal = document.querySelectorAll('.modal');
  modalHandlers(modal);
}

// FN: player setup
function player() {
  /*
  * get buttons from DOM
  */
  let playButton = document.getElementById('play');
  let stopButton = document.getElementById('stop');

  /*
  * add event listeners and handlers for player buttons
  */
  playButton.addEventListener('touchstart', play, false);
  stopButton.addEventListener('touchstart', stop, false);
}

// FN: playback
function play() {
  checkActive();
  this.style.backgroundColor = "#fadb48";
}

// FN: stop playback
function stop() {
  checkActive();
  this.style.backgroundColor = "#cd0603";
}

// FN: check if touch event node is active
function checkActive() {
  // get controls node
  const controls = document.getElementById('controls');
  // get buttons from controls
  const buttons = controls.getElementsByTagName('button');
  // iterate through each button node
  for (button of buttons) {
    // update style of button
    button.style.backgroundColor = "#fff";
  }
}

// LOADER - load app & check for deviceready event...
onLoad();

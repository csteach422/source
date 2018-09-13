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

  // setup handlers for touch events
  touchEvents();

  // setup handlers for slide content events
  slideEvents();

  }, false);

}

// FN: call in response to Pause event
function onPause() {
  // do something on pause...
}

// FN: call in response to Resume event
function onResume() {
  // do something on resume...
}

// FN: test touch event
function touchEvents() {
  const slider = document.getElementById('slideContent');
  testTouch(slider);
}

// FN: test slide events recognised...
function slideEvents() {
  const slideLinks = document.querySelectorAll('#slideLinks a');
  slideHandlers(slideLinks);
}

// LOADER - load app & check for deviceready event...
onLoad();

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
  //slideEvents();
  // setup for handlers for audio player
  audioPlayer();
  // basic modal handler
  // modal();

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
// function slideEvents() {
//   // get all anchor elements relative to #slideLinks
//   const slideLinks = document.querySelectorAll('#slideLinks a');
//   slideHandlers(slideLinks);
// }

// FN: call handlers for modal events...
// function modal() {
//   // get nodes with modal class
//   const modal = document.querySelectorAll('.modal');
//   modalHandlers(modal);
// }

// FN: player setup
function audioPlayer() {
  /*
  * get buttons from DOM
  */
  let playButton = document.getElementById('play');
  let stopButton = document.getElementById('stop');
	let pauseButton = document.getElementById('pause');

	// test audio file
	let audioURL = buildURL("media/audio/egypt.mp3");
	// instantiate media object for audio
	let audio = new Media(audioURL, null, errorReport);
	// define current audio positon
	let audioPosn = 0;

  /*
  * add event listeners and handlers for player buttons
  */
  playButton.addEventListener('touchstart', play, false);
  stopButton.addEventListener('touchstart', stop, false);
	pauseButton.addEventListener('touchstart', pause, false);

		// FN: playback
		function play() {
		  checkActive();
		  this.style.backgroundColor = "#fadb48";

			//check current audio position
			if (audioPosn > 1) {
				audio.seekTo(audioPosn*1000);
				audio.play();
				alert("playback position: " + audioPosn + " secs");
			} else {
				audio.play();
				alert("playback position: start..." + audioPosn);
			}
		}

		// FN: stop playback
		function stop() {
		  checkActive();
		  this.style.backgroundColor = "#cd0603";

			//stop audio playback
			audio.stop();
			//reset $audioPosn
			audioPosn = 0;
			//release audio - important for android resources...
			audio.release();
			//just for testing
			alert("stop playing audio...& release!" + audioPosn);
		}

		// FN: pause playback
		function pause() {
			checkActive();
		  this.style.backgroundColor = "#fadb48";

			//pause audio playback
			audio.pause();
  		audio.getCurrentPosition(
      	// success callback
      	function (position) {
          if (position > -1) {
						audioPosn = position;
            alert("pause playback at position: " + position + " secs");
          }
      	},
      	// error callback
      	function (e) {
          alert("Error getting pos=" + e);
      	}
  		);
		}
}

//build url for android
function buildURL(file) {
	// get location of current file...index.html
	let path = window.location.pathname;
	// strip index.html from string...
  path = path.substr(path, path.length - 10);
	// check for android
	if (device.platform.toLowerCase() === "android") {
		let androidFile = "file://" + path + file;
		return androidFile;
	} // check for ios
	else if (device.platform.toLowerCase() === "ios") {
		let iosFile = path + file;
		return iosFile;
	}
}

function errorReport(error) {
	alert("Error with Audio - " + JSON.stringify(error));
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

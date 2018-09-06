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

  // start test timer
  testTimer();

  }, false);

}

// FN: call in response to Pause event
function onPause() {
    // get current Unix timestamp
    const currentTime = Date.now();
    // get status element in DOM
    const pause = document.getElementById('pause');
    // create text node to update DOM
    const text = document.createTextNode(`app has been paused...${currentTime}`);
    // append text to status element
    pause.appendChild(text);
    // show alert in native UI
    alert('app paused');
}

// FN: call in response to Resume event
function onResume() {
    // get status element in DOM
    const resume = document.getElementById('resume');
    // create text for output
    const text = document.createTextNode("app has been resumed...");
    // append text to status element
    resume.appendChild(text);
    // show alert in native UI
    alert('app now resumed');
}

// test timer for event &c.
function testTimer () {
  // add timer
  let minutesLabel = document.getElementById("minutes");
  let secondsLabel = document.getElementById("seconds");
  let totalSeconds = 0;
  setInterval(setTime, 1000);

  function setTime() {
    ++totalSeconds;
    secondsLabel.innerHTML = timeDisplay(totalSeconds % 60);
    minutesLabel.innerHTML = timeDisplay(parseInt(totalSeconds / 60));
  }

  function timeDisplay(value) {
    let valString = value + "";
    if (valString.length < 2) {
      return "0" + valString;
    } else {
      return valString;
    }
  }

}

// LOADER - load app & check for deviceready event...
onLoad();

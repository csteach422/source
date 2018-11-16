/*
* touch.js
* - handlers for various touch events & options
* - basic test for touch events...
*/

function testTouch(node) {
  node.addEventListener('click', testLog, false);
}

function testLog(){
  console.log('listener added...');
}

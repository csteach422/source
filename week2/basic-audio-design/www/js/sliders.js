/*
* scroll-slide.js
* - scroll options for slider & content
* - test of touch interaction with slider
*/


// FN: add handlers for passed nodes
function slideHandlers(nodes) {
  console.log('nodes = ', nodes);
  // iterate through passed nodes to get links
  for (link of nodes) {
    // get ID attribute for each link node
    let id = link.getAttribute('id');
    // add listener for touch event
    document.getElementById(id).addEventListener('touchstart', scrollContent, false);
  }
}

// FN: check active status for selected scroll link and content
function scrollContent(){
  let dataVisible = this.getAttribute('data-visible');
  let parentId = this.parentNode.getAttribute('id');
  console.log('parent ID = ', parentId);

  // get anchor links for defined parent ID
  let links = document.querySelectorAll(`#${parentId} a`);
  console.log('links = ', links);
  // iterate through passed nodes for links
  for (link of links) {
    // get ID attribute for each link node
    let id = link.getAttribute('id');
    // update attribute value for data-visible
    document.getElementById(id).setAttribute('data-visible', 'false');
  }

  this.setAttribute('data-visible', 'true');
}

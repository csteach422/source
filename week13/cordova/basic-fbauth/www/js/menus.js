/*
* menus.js
* - menu options for various app menus
* - test of touch interaction
*/

// FN: add handlers for passed nodes
function menuHandlers(btn, links) {
	// add event listener for hamburger menu - open sidebar
	btn.addEventListener('touchstart', menuOpen, false);
	// define sidebar
	const sideBar = document.getElementById('side');

	function menuOpen(links) {
		console.log('menu btn open...');
		// set visibility to visible - show sidebar
		sideBar.style.visibility = 'visible';
		// add event listener for close - touch app UI to close menu...
		sideBar.addEventListener('touchstart', menuClose, false);
	}

	function menuClose(e) {
		console.log('side close...');
		// check target is clicked parent - sideBar
		if (e.target !== this) {
			// if target is menu &c, then simply ignore & return...
    	return;
		}
		// set visibility to hidden - hide sidebar
		sideBar.style.visibility = 'hidden';
	}

}
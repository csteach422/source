/*
* firebase.js
* - config and logic for firebase queries...
*/

// Firebase config...
var config = {
  _YOUR_FIREBASE_CONFIG_
};
// initialise config for firebase
firebase.initializeApp(config);

// DATABASE - define connection
const db = firebase.database();

/*
* DATA - GET
* - read data from database
*/

// get ref in db once
// call forEach() on return snapshot
// push values to local array
// unique id for each DB parent object is `key` property on snapshot
function loadData() {
  // get data from FB
	const data = db.ref('egypt/ancient_sites')
	  .once('value')
	  .then((snapshot) => {
	    const sites = [];
	    snapshot.forEach((siteSnapshot) => {
	      sites.push({
	        id: siteSnapshot.key,
	        ...siteSnapshot.val()
	      });
	    });
			return sites;
	  });

		// return data Promise
		return data;
}

// prepare data from loadData() for rendering
function outputData(elem) {
	// use data Promise - append to DOM...
	const output = loadData().then((data) => {
		// iterate through each site
		for (site in data) {
			const card = document.createElement('div');
			card.setAttribute('class', 'fb-card');
			const heading = document.createElement('h4');
			const title = document.createTextNode(data[site]['title']);
			heading.appendChild(title);
			card.appendChild(heading);
			// build card for site output
			const cardList = createCard(data[site]);
			card.appendChild(cardList);
			elem.appendChild(card);
		}
	});
	// return the generated output for rendering...
	return output;
}

function createCard (site) {
	// define card array
	const cards = [];
	// define data for card
	const location = document.createTextNode(site['location']);
	const kingdom = document.createTextNode(site['kingdom']);
	const lat = document.createTextNode(site['coords']['lat']);
	const long = document.createTextNode(site['coords']['long']);
	cards.push(location, kingdom, lat, long);
	// define card structure
	const ul = document.createElement('ul');

	cards.forEach((site) => {
		const li = document.createElement('li');
		li.appendChild(site);
		ul.appendChild(li);
	});

	return ul;
}

// check child nodes relative to passed element
function clearData(elem) {
	// check passed element for child nodes
	while (elem.firstChild) {
		// remove child...
		elem.removeChild(elem.firstChild);
	}
}
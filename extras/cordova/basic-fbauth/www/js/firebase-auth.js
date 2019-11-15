/*
* firebase-auth.js
* - config and logic for firebase auth queries...
*/

// AUTH - define provider
const googleProvider = new firebase.auth.GoogleAuthProvider();

// BUTTONS - login & logout
const loginBtn = document.getElementById('submit-login');
const logoutBtn = document.getElementById('submit-logout')

// start login call to return  sign-in...
const startLogin = () => {
	//return firebase.auth().signInWithPopup(googleProvider);
	return firebase.auth().signInWithRedirect(googleProvider);
};


// start logout call to return sign-out...
const startLogout = () => {
	return firebase.auth().signOut();
};

firebase.auth().getRedirectResult().then(function(result) {
  if (result.credential) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
		console.log('redirect token retrieved...');
    // ...
  }
  // The signed-in user info.
  var user = result.user;
	console.log('user info = ', user);
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});

// provides listener for user authenication
// checks if a user is logged in or not...
firebase.auth().onAuthStateChanged((user) => {
	// get node for output
	const output = document.getElementById('fb-content');
	// check if user is logged in or not...
	if (user) {
		// modify style property - hide login
		loginBtn.style.display = 'none';
		// modify style property - show logout button
		logoutBtn.style.display = 'inline';
		// call function to get data from firebase
		outputData(output);
		// log...
		console.log('user logged in - data output');
	} else {
		// modify style property - show login button
		loginBtn.style.display = 'inline';
		// modify style property - hide logout button
		logoutBtn.style.display = 'none';
		// call function to remove data from app UI
		clearData(output);
		// log
		console.log('user logged out - data output removed');
	}
});


// TEST - login and logout button listeners & execution...
loginBtn.addEventListener('click', startLogin);
logoutBtn.addEventListener('click', startLogout);
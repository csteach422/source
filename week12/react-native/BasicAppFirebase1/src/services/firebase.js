/*
* firebase.js - BasicAppFirebase1
* - config and initialisation for firebase...
*/

import * as firebase from "firebase";

// export firebase initialisation
export const initialize = () => firebase.initializeApp({
    apiKey: "_YOUR_API_KEY_",
    authDomain: "_YOUR_APP_.firebaseapp.com",
    databaseURL: "https://_YOUR_APP_.firebaseio.com",
    projectId: "_YOUR_PROJECT_ID_",
    storageBucket: "_YOUR_APP_.appspot.com",
    messagingSenderId: "_YOUR_SENDER_ID_"
})

// setup listener for firebase updates
export const setListener = (endpoint, updaterFn) => {
    firebase.database().ref(endpoint).on('value', updaterFn);
    return () => firebase.database().ref(endpoint).off();
}

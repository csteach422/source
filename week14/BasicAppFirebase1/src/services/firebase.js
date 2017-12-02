/*
* firebase.js - BasicAppFirebase1
* - config and initialisation for firebase...
*/

import * as firebase from "firebase";

// export firebase initialisation
export const initialize = () => firebase.initializeApp({
    apiKey: "AIzaSyBPcEKwXKaFfeBSzTr_A8NuJgI8GbcJrI4",
    authDomain: "egyptian-cards.firebaseapp.com",
    databaseURL: "https://egyptian-cards.firebaseio.com",
    projectId: "egyptian-cards",
    storageBucket: "egyptian-cards.appspot.com",
    messagingSenderId: "773246184815"
})

// setup listener for firebase updates
export const setListener = (endpoint, updaterFn) => {
    firebase.database().ref(endpoint).on('value', updaterFn);
    return () => firebase.database().ref(endpoint).off();
}

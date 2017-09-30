/*
* observer.js - basic observer pattern
*/

// constructor for observer
function Subject () {
  // keep track of observers
  this.observers = [];

}

// add subscribe to constructor prototype
Subject.prototype.subscribe = function(fn) {
  this.observers.push(fn);
};

// add unsubscribe
Subject.prototype.unsubscribe = function(fn) {
  //
};

// add broadcast
Subject.prototype.broadcast = function(data) {
  this.observers.forEach((subscriber) => subscriber(data));
};

// instantiate subject object
const eventSubject = new Subject();

// subscribe & define function to call when broadcast message is sent
eventSubject.subscribe(() => {
  console.log('observer subscribe in broadcast...');
});

document.getElementById('obs').addEventListener('click', () => eventSubject.broadcast());

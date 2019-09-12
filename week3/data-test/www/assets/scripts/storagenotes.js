//singleton instance object...
var NotesManager = (function () {
  var instance;

  function createNoteObject() {
      return {
        set: function (key, value) {
          window.localStorage.setItem(key, value);
        },
        get: function (key) {
          return window.localStorage.getItem(key);
        }
      };
  };

  return {
    // get instance of object
    getInstance: function () {
      // if instance doesn't already exist - create
      if (!instance) {
        instance = createNoteObject();
      }
      // otherwise, return reference to existing instance
      return instance;
    }
  };

})();

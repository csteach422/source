### Readme - Observer Pattern - Basic

* FN: constructor function for Subject
  * create empty array on local scope
* PROTO:
  * add methods to the constructor object's prototype
  * `subscribe()`, `unsubscribe()`, `broadcast()`
* VARS:
  * `const` variable for instantiated subject object
* Use:
  * call `subscribe()` on subject object
    * console log message
  * add event listener to DOM element
    * call `broadcast()` on subject object for change in state

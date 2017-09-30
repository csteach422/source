### Readme - Observer Pattern - Basic DOM

* FN: constructor function for Observer
  * create empty array on local scope
* PROTO:
  * add methods to the constructor object's prototype
  * `subscribe()`, `unsubscribe()`, `broadcast()`
* VARS:
  * global `domLoad` boolean
  * `const` variable for instantiated observer object
* Use:
  * console log initial `domLoad` boolean
  * instantiate object for observer
  * call `subscribe()` on observer object
    * update boolean for `domLoad`
    * console log message
  * add event listener to dom element
    * call `broadcast()` on observer object for change in state

#### initial setup
* create default cordova app using CLI, e.g.
	* `cordova create maptest com.example.maptest MapTest`
* add required platforms for app, e.g.
	* `cordova platform add android`
* add cordova plugin for geolocation
	* `cordova plugin add cordova-plugin-geolocation`
* use Bower &c. to install OnsenUI
	* `bower instal onsenui`
* add OnsenUI JS and CSS to `index.html`
* add JS for Google Maps library to `index.html`
	* get key for using maps api
	* `<script src="http://maps.google.com/maps/api/js?key=YOUR_API_KEY" type="text/javascript"></script>`

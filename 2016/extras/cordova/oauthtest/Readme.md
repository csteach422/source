### Readme - Cordova - OAuth 2.0 test

A brief overview of setup for OAuth 2.0 authentication with a Cordova app.

#### Initial setup
* create default cordova app using CLI, e.g.
	* `cordova create oauthtest com.example.oauthtest OauthTest`
* add required platforms for app, e.g.
	* `cordova platform add android --save`
* add cordova plugin for inappbrowser
	* `cordova plugin add cordova-plugin-inappbrowser --save`
* use Bower &c. to install OnsenUI
	* `bower install onsenui`
* add OnsenUI JS and CSS to `index.html`

#### Usage
This test app uses the jQuery based Cordova OAuth 2 plugin to enable access to OAuth 2 based services, including Facebook, Google, Instagram, &c. Further details are available at the following URL,

	* [GitHub - jquery-cordova-oauth2](https://github.com/krisrak/jquery-cordova-oauth2).

This test app uses Google's OAuth 2.0 authentication. Upon receipt of the required access token for an authorised user session, use the following guidelines to implement required usage, e.g. Google docs

	* [Google Identity Platform](https://developers.google.com/identity/protocols/OAuth2UserAgent)

#### Testing
To test this app, you'll need to run it on a connected device. It will not load correctly using the `browser` platform due to domain issues. Simply issue the following Cordova CLI command with a device connected to your local machine,

```bash
cordova run android
```

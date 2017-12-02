/*
* App.js - BasicAppWeb
* - starter app for testing WebView component and usage...
*/

import React, { Component } from 'react';
import {
  StyleSheet,
  WebView
} from 'react-native';



export default class App extends Component {

  render() {
    return (
      <WebView style={styles.web}
        scalesPageToFit
        automaticallyAdjustContentInsets
        source={{
          uri: 'https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza'
        }} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  web: {
    marginTop: 30,
  },
});

/*
* App.js - BasicAppStyle
* - starter app for testing basic `style` usage
* - `style` prop
*/

// import React, Component module as Component from base React
import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

class MyAppText extends Component {
  render() {
    return (
      <Text>
        {this.props.children}
      </Text>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      /*
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
      */
      <View style={styles.container}>
        <MyAppText style={styles.textdefault}>
          <View style={{width: 200, height: 100}}>
            <Text style={styles.welcome}>Welcome to Styles!</Text>
          </View>
          a test for various styles...
        </MyAppText>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'powderblue',
  },
  textdefault: {
    fontSize: 15,
    color: '#000',
  },
  welcome: {
    ...Platform.select({
      ios: {
        fontFamily: 'Arial',
        color: 'blue',
      },
      android: {
        fontFamily: 'Roboto',
        color: 'green',
      },
    }),
    fontSize: 25,
    textAlign: 'auto',
    backgroundColor: '#ddd',
  },
});

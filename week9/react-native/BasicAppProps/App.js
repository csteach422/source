/*
* App.js - BasicAppProps
* - starter app for testing basic `props`
*/

// import React, Component module as Component from base React
import React, { Component } from 'react';
// import Text as Text &c. from React Native
import { AppRegistry, Text, View } from 'react-native';

// custom abstracted component - expects props for text `output`
class OutputText extends Component {
  render() {
    return (
      // render passed props `output` value
      <Text>{this.props.output}</Text>
    );
  }
}

// default component - use View container render OutputText message with passed props...
export default class WelcomeMessage extends Component {
  render() {
    return (
      // View container - render Text output from OutputText component
      <View style={{alignItems: 'center'}}>
        // JSX embed OutputText component - pass value for props `output`
        <OutputText output='welcome to the basic tester...' />
      </View>
    );
  }
}

// register app Root - component for appKey, component to run (component provider to return...)
AppRegistry.registerComponent('BasicAppProps', () => WelcomeMessage);

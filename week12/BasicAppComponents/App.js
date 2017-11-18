/*
* App.js - BasicAppComponents
* - starter app for testing basic components, abstraction...
*/

// import React, Component module as Component from base React
import React, { Component } from 'react';
// import Text as Text &c. from React Native
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// custom abstracted component - expects props for heading `output` and `size`
class OutputHeading extends Component {
  render() {
    return (
      // render passed props `output` value, pass heading size...
      <Text style={this.props.style}>{this.props.output}</Text>
    );
  }
}

// default component - use View container, render test heading with passed props...
export default class ComponentTester extends Component {
  render() {
    return (
      <View style={styles.container}>
        <OutputHeading output='Component Heading Tester' style={styles.heading3} />
      </View>
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
  heading3: {
    fontSize: 18,
    color: 'blue',
  },
});

// register app Root - component for appKey, component to run (component provider to return...)
AppRegistry.registerComponent('BasicAppComponents', () => ComponentTester);

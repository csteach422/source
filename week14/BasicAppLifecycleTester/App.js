/*
* App.js - BasicAppLifecycleTester
* - starter app for testing component lifecycle...
*/

// import React, Component module as Component from base React
import React, { Component } from 'react';
// import Text as Text &c. from React Native
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

const intro = {
	'heading': 'Lifecycle Component Tester',
	'description': 'test lifecycle methods...'
};

// abstracted component for rendering *timer*
class MountTester extends Component {
  // instantiate object - expects props parameter
  constructor(props) {
    // calls parent class' constructor with `props` provided - i.e. uses Component to setup props
    super(props);
    // set initial state
    this.state = {
      mount: false
    };
  }

  // lifecycle method - settings &c. as component mounts
  componentDidMount() {
    this.setState({
      mount: true
    })
  }

  // lifecycle method - clear interval for timer as component is unmounted/destroyed
  componentWillUnMount() {

  }

  // component render - check state of component...
  render() {
    return (
      <View>
        <Text>
          {`mount: ${this.state.mount}`}
        </Text>
      </View>
    )
  }
}

export default class LifecycleTester extends Component {
  render() {
    return (
      // create View container - then instantiate Tape objects - pass text props
      <View style={styles.container}>
        <View style={styles.headingBox}>
          <Text style={styles.heading1}>
            {intro.heading}
          </Text>
        </View>
        <View style={styles.subHeadingBox}>
          <Text style={styles.headingContent}>
            {intro.description}
          </Text>
        </View>
        <View style={styles.contentBox}>
          <MountTester />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: 'white',
    marginTop: 20
  },
  headingBox: {
		flex: 1,
		flexShrink: 1,
    backgroundColor: '#585459',
    margin: 10,
	},
  subHeadingBox: {
		flex: 1,
		flexShrink: 1,
    backgroundColor: '#BBB',
    margin: 10,
    marginTop: 0,
	},
  contentBox: {
    flex: 3,
    backgroundColor: '#EEE',
    margin: 10,
    marginTop: 0,
    paddingTop: 20,
	},
  buttonBox: {
    alignItems: 'stretch',
    margin: 15,
    marginTop: 0,
    borderWidth: 1,
    borderColor: '#AAA',
    backgroundColor: '#EEE',
  },
  heading1: {
    fontSize: 20,
    color: '#FAF0FF',
    textAlign: 'center',
    margin: 20,
	},
	heading2: {
    fontSize: 18,
    color: '#BDB6C1',
    textAlign: 'left',
    margin: 20,
    marginBottom: 10,
  },
  heading3: {
    fontSize: 16,
    color: '#585459',
    textAlign: 'left',
    margin: 20,
  },
  headingContent: {
    fontSize: 14,
    color: '#585459',
    margin: 20,
	},
  content: {
    fontSize: 14,
    color: '#CD0603',
    margin: 20,
    marginTop: 0,
	},
});

// register app Root - component for appKey, component to run (component provider to return...)
AppRegistry.registerComponent('BasicAppState2', () => StateTester);

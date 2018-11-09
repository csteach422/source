/*
* App.js - BasicAppState2
* - starter app for testing basic `state` - part 2
*/

// import React, Component module as Component from base React
import React, { Component } from 'react';
// import Text as Text &c. from React Native
import { AppRegistry, Button, StyleSheet, Text, View } from 'react-native';

const intro = {
	'heading': 'State Tester - part 2',
	'description': 'update state'
};

// abstracted component for rendering *tape* text
class EditButton extends Component {
  // instantiate object - expects props parameter, e.g. text & value
  constructor(props) {
    // calls parent class' constructor with `props` provided - i.e. uses Component to setup props
    super(props);
    // set initial state - e.g. text is shown
    this.state = { editShow: true };
  }
  // custom function to modify state on button click
  handleClick = () => {
    //set state after button click
    this.setState({ editShow: false });
  }
  // component render - check state of component...
  render() {
    if (this.state.editShow == false) {
      return (
        <Text style={styles.content}>
          Button has been removed...
        </Text>
      );
    } else {
      return (
        <View style={styles.buttonBox}>
          <Button
            onPress={this.handleClick}
            title={this.props.title}
            color='#585459'
          />
        </View>
      );
    }
  }
}

export default class StateTester extends Component {
  render() {
    return (
      // create View container - then instantiate Tape objects - pass text props
      <View style={styles.container}>
        <View style={styles.headingBox}>
          <Text style={styles.heading1}>
            {intro.heading}
          </Text>
          <Text style={styles.headingContent}>
            {intro.description}
          </Text>
        </View>
          <View style={styles.contentBox}>
            <EditButton title="Tap the button..."/>
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
  contentBox: {
    flex: 2,
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
    color: '#DDD',
    margin: 20,
    marginTop: 0,
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

/*
* App.js - BasicAppSetNativeProps
* - starter app for testing basic set native props
*/

// import React, Component module as Component from base React
import React, { Component } from 'react';
// import Text as Text &c. from React Native
import {
  AppRegistry,
  Button,
  StyleSheet,
	TextInput,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const intro = {
	'heading': 'Set Native Props',
	'description': 'directly modify...'
};

// default component - use View container, render list &c. with passed props...
export default class DirectUpdate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quoteInput: 'enter a favourite quotation...',
      quoteText: 'the unexamined life is not worth living...'
    };
  }

  clearTextInput = () => {
    this._textInput.setNativeProps({text: ''});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headingBox}>
          <Text style={styles.heading1}>
            {intro.heading}
          </Text>
          <Text style={styles.headingContent}>
            {intro.description}
          </Text>
        </View>
        <View style={styles.inputBox}>
          <View style={styles.textInputBox}>
            <TextInput
              // arrow function call to set value to current component...
              ref={component => this._textInput = component}
              style={styles.textInput}
              placeholder={this.state.quoteInput}
              onChangeText={(quoteText) => this.setState({quoteText})}
              selectionColor='#585459'
            />
          </View>
          <View style={styles.buttonBox}>
            <Button
						  onPress={this.clearTextInput}
						  title='Tap to clear text'
              color='#585459'
					  />
          </View>
        </View>
        <View style={styles.contentBox}>
          <Text style={styles.content}>
            {this.state.quoteText}
          </Text>
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
  inputBox: {
    backgroundColor: '#DDD',
    margin: 10,
    marginTop: 0,
  },
  textInputBox: {
    alignItems: 'stretch',
    margin: 15,
    borderWidth: 1,
    borderColor: '#AAA',
    backgroundColor: '#EEE',
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
    color: '#585459',
    margin: 20,
    marginTop: 0,
	},
  textInput: {
    height: 40,
    color: '#585459',
    margin: 10,
  },
});

// register app Root - component for appKey, component to run (component provider to return...)
AppRegistry.registerComponent('BasicAppSetNativeProps', () => DirectUpdate);

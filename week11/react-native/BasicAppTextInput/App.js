/**
 * BasicAppTextInput - App.js
 * - basic example of text input and view updates
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

const platformHeading = Platform.select({
  ios: 'iOS tester...',
  android: 'Android tester...',
});

export default class TextUpdater extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteInput: 'enter a favourite quotation...',
      quoteText: 'the unexamined life is not worth living...'
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headingBox}>
          <Text style={styles.heading1}>
            Basic Text Input
          </Text>
          <View style={styles.textInputBox}>
            <TextInput
              style={styles.textInput}
              placeholder={this.state.quoteInput}
              onChangeText={(quoteText) => this.setState({quoteText})}
            />
          </View>
        </View>
        <View style={styles.contentBox}>
          <Text style={styles.heading3}>
            {platformHeading}
          </Text>
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
    backgroundColor: 'mintcream',
  },
  headingBox: {
    flex: 1,
    backgroundColor: 'powderblue',
    margin: 10,
  },
  contentBox: {
    flex: 2,
    backgroundColor: 'cadetblue',
    margin: 10,
    marginTop: 0,
  },
  textInputBox: {
    alignItems: 'stretch',
  },
  heading1: {
    fontSize: 22,
    color: 'cadetblue',
    textAlign: 'center',
    margin: 20,
  },
  heading3: {
    fontSize: 18,
    color: 'powderblue',
    textAlign: 'left',
    margin: 20,
    marginBottom: 10,
  },
  content: {
    fontSize: 14,
    color: 'white',
    margin: 20,
    marginTop: 10,
  },
  textInput: {
    height: 40,
    color: 'cadetblue',
  }
});

AppRegistry.registerComponent('BasicAppTextInput', () => TextUpdater);

/**
 * BasicAppFlex - App.js
 * - test flexbox layout...
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const platformHeading = Platform.select({
  ios: 'testing Flex on iOS...',
  android: 'testing Flex on Android...',
});

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headingBox}>
          <Text style={styles.heading1}>
            Welcome to Flex Layout!
          </Text>
        </View>
        <View style={styles.contentBox}>
          <Text style={styles.heading3}>
            {platformHeading}
          </Text>
          <Text style={styles.content}>
            a fun layout with flex...
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
});

/*
* App.js - BasicAppSegmentedControl
* - starter app for testing SegmentedControlIOS component and usage...
*/

import React, { Component } from 'react';
import {
  SegmentedControlIOS,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

export default class App extends Component {

  state = {
    selectedIndex: 0
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Egypt Travels
        </Text>
        <SegmentedControlIOS
          values={['Giza', 'Luxor']}
          selectedIndex={this.state.selectedIndex}
          onChange={(event) => {
            this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});
          }}
        />
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
});

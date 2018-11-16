/*
* App.js - BasicAppImages
* - starter app for testing image component and usage...
*/

import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

class ManageImage extends Component {

  // instantiate object - expects props parameter, e.g. img src
  constructor(props) {
    // calls parent class' constructor with `props` provided - i.e. uses Component to setup props
    super(props);
  }

  render() {
    return (
        <Image
          style={styles.image}
          resizeMode="contain"
          source={this.props.src}
        />
    );
  }
}

export default class App extends Component<{}> {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Egyptian travels...
        </Text>
        <ManageImage src={require('./images/camel-icon.png')} />
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  image: {
    margin: 10,
    height: 100,
    width: 100,
  }
});

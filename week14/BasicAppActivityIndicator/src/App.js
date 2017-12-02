/*
* App.js - BasicAppActivityIndicator
* - starter app for testing ActivityIndicator component and usage...
*/

import React, { Component } from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

class ManageImage extends Component {

  // instantiate object - expects props parameter, e.g. img src
  constructor(props) {
    // calls parent class' constructor with `props` provided - i.e. uses Component to setup props
    super(props);
    this.showImage = this.showImage.bind(this);
  }

  state = {
    showImage: false,
    loading: false
  }

  showImage() {
    this.setState({
      loading: true
    });
    setTimeout(() => {
      this.setState({
        showImage: true,
        loading: false
      })
    }, 2500)
  }

  render() {
    return (
      <View>
        {
          this.state.loading ?
          <ActivityIndicator color="blue" size="small" animating />
          : false
        }
        {this.state.showImage ?
          <Image
            style={styles.image}
            resizeMode="contain"
            source={this.props.src}
          /> :
          <TouchableOpacity onPress={this.showImage}>
            <Text>Show Image</Text>
          </TouchableOpacity>
        }
      </View>
    );
  }
}

export default class App extends Component {

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

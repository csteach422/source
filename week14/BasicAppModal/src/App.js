/*
* App.js - BasicAppModal
* - starter app for testing modal component and usage...
*/

import React, { Component } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View
} from 'react-native';

class ManageModal extends Component {

  // instantiate object - expects props parameter
  constructor(props) {
    super(props)
  }

  state = {
    modalVisible: true,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        >
        <View style={styles.modal}>
          <TouchableHighlight onPress={() => {
            this.setModalVisible(!this.state.modalVisible)
            }}>
            <Text style={styles.modalClose}>close</Text>
          </TouchableHighlight>
          <Text style={styles.modalText}>Greetings from Egypt</Text>
        </View>
      </Modal>
    );
  }
}

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <ManageModal />
          <Text>Modal Demo</Text>
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
  modal: {
    borderRadius: 2,
    margin: 20,
    marginTop: 150,
    minHeight: 150,
    padding: 20,
    backgroundColor: 'black',
  },
  modalText: {
    color: 'white',
    margin: 40,
    marginLeft: 0,
  },
  modalClose: {
    color: 'white',
    margin: 0,
  },
  image: {
    margin: 10,
    height: 100,
    width: 100,
  }
});

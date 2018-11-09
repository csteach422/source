/*
* App.js - BasicAppDataFlow
* - starter app for testing basic data flow
*/

// import React, Component module as Component from base React
import React, { Component } from 'react';
// import Text as Text &c. from React Native
import {
  AppRegistry,
	FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native';

const intro = {
	'heading': 'Classical Authors',
	'description': 'example data flow with FlatList...'
};

// custom abstracted component - expects props for list data...
class ListClassics extends Component {
  render() {
    return (
      <FlatList
        data={this.props.data}
        renderItem={({item}) => <Text style={styles.listItem}>{item.key}</Text>}
      />
    );
  }
}

// default component - use View container, render list &c. with passed props...
export default class DataFlow extends Component {
  render() {
    let classics = [{ key: 'Greek'}, {key: 'Roman'}];
    return (
      <View style={styles.container}>
        <View style={styles.headingBox}>
          <Text style={styles.heading1}>
            {intro.heading}
          </Text>
          <Text style={styles.content}>
            {intro.description}
          </Text>
        </View>
        <View style={styles.listBox}>
          <Text style={styles.heading3}>
            Select a category
          </Text>
          <ListClassics data={classics} />
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
  listBox: {
		flex: 2,
		flexGrow: 2,
		backgroundColor: '#BDB6C1',
		margin: 10,
		marginTop: 0,
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
  content: {
    fontSize: 14,
    color: 'white',
    margin: 20,
    marginTop: 0,
	},
	listItem: {
		fontSize: 13,
		color: '#585459',
		marginLeft: 20,
		marginTop: 10,
		marginBottom: 10,
	}
});

// register app Root - component for appKey, component to run (component provider to return...)
AppRegistry.registerComponent('BasicAppDataFlow', () => DataFlow);

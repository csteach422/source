/**
 * BasicAppTouch - App.js
 * - basic example of touch
 */

import React, { Component } from 'react';
import {
	Alert,
	AppRegistry,
	Button,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ButtonPress extends Component {
	_buttonPress() {
		Alert.alert('a button has been tapped...')
	}
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.buttonBox}>
					<Button
						onPress={this._buttonPress}
						title='Tap for Alert'
						color='cadetblue'
					/>
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
	buttonBox: {
		flex: 1,
		justifyContent: 'space-around',
    backgroundColor: 'powderblue',
    margin: 10,
	},
	contentBox: {
    flex: 2,
    backgroundColor: 'cadetblue',
    margin: 10,
    marginTop: 0,
  },
})

AppRegistry.registerComponent('BasicAppTouch', () => ButtonPress);

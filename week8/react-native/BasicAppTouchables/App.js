/**
 * BasicAppTouchables - App.js
 * - basic example of touchable components - custom design
 */

import React, { Component } from 'react';
import {
	Alert,
	AppRegistry,
	Platform,
	StyleSheet,
	Text,
	TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback,
  View
} from 'react-native';

export default class TouchablePress extends Component {
	_touchablePress() {
		Alert.alert('test touchable tap fired...');
	}
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.buttonBox}>
					<TouchableHighlight
						onPress={this._touchablePress}
						underlayColor='cadetblue'
						>
						<View style={styles.customButton}>
							<Text>Try a Touchable Highlight</Text>
						</View>
					</TouchableHighlight>
				</View>
				<View style={styles.contentBox}>

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
	customButton: {
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	contentBox: {
    flex: 2,
    backgroundColor: 'cadetblue',
    margin: 10,
    marginTop: 0,
  },
})

AppRegistry.registerComponent('BasicAppTouchables', () => TouchablePress);

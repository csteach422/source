/*
* BasicAppFirebaseData
* - ./screens/homescreen.js
* - app screen for rendering welcome...
*/
import React from 'react';
import { Button, StyleSheet, Text, View} from 'react-native';

export default class HomeScreen extends React.Component {

	// define header title for screen
	static navigationOptions = {
    title: "Ancient Sites"
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome to Ancient Sites</Text>
				<Button
          title="View Data"
          onPress={() => this.props.navigation.navigate('Data', { cards: 'Egypt' })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})


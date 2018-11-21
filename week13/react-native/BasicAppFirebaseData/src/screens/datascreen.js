/*
* BasicAppFirebaseData
* - ./screens/datascreen.js
* - app screen for rendering data cards...
*/

import React from 'react';
import { FlatList, StyleSheet, View} from 'react-native';
import CardOutput from '../components/card';
import { getCards } from '../services/api';

export default class DataScreen extends React.Component {

	// define header title for screen - add params
	static navigationOptions = ({ navigation }) => ({
    title: `Sites - ${navigation.state.params.cards}`
  })

	// data...
	state = {
    cardRecords: []
  }

  componentDidMount() {
    this.unsubscribeGetCards = getCards((snapshot) => {
      this.setState({
        cardRecords: Object.values(snapshot.val())
      })
    })
  }
  componentWillUnmount() {
    this.unsubscribeGetCards();
  }

  render() {
    return (
			<View style={styles.container}>
        <FlatList
          data={this.state.cardRecords}
          renderItem={CardOutput}
          keyExtractor={(item, index) => (`card-${index}`)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
})
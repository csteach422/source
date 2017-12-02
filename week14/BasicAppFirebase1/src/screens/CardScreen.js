import React from 'react';
import { getCards } from '../services/api';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import CardOutput from '../components/Card';

export default class CardScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: `Cards - ${navigation.state.params.cards}`
    })

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
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

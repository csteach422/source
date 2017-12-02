import React from 'react';
import { View, StyleSheet, Text } from 'react-native'

const CardOutput = ({ item }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{item.title}</Text>
    <Text>{item.card}</Text>
  </View>
)

const styles = {
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderColor: '#979797',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10
  },
  cardTitle: {
    color: '#159FB2',
    marginBottom: 10
  }
}

export default CardOutput;

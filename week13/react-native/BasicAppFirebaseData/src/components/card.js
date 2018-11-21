import React from 'react';
import { View, StyleSheet, Text } from 'react-native'

const CardOutput = ({ item }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{item.title}</Text>
		<Text>kingdom: {item.kingdom}</Text>
    <Text>location: {item.location}</Text>
		<Text style={styles.cardCoords}>coordinates</Text>
		<Text>latitude: {item['coords']['lat']}</Text>
		<Text>longitude: {item['coords']['long']}</Text>
  </View>
)

const styles = {
  card: {
		flex: 1,
    marginTop: 20,
		marginLeft: 20,
		marginRight: 20,
    padding: 15,
    backgroundColor: '#E6F1FF',
    borderColor: '#293240',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
  },
  cardTitle: {
    color: '#3A3C5F',
		fontSize: 16,
		fontWeight: 'bold',
    marginBottom: 15
  },
	cardCoords: {
		color: '#3A3C5F',
		fontSize: 13,
		fontWeight: 'bold',
		marginTop: 15,
		marginBottom: 10
	}
}

export default CardOutput;

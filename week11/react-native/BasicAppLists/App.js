/*
* App.js - BasicAppLists
* - starter app for testing FlatList component and usage...
*/

import React, { Component } from 'react';
import {
	AppRegistry,
	FlatList,
	SectionList,
  StyleSheet,
  Text,
  View
} from 'react-native';

const intro = {
	'heading': 'add some lists...',
	'description': 'example list - FlatList'
};

export default class FlatListTester extends Component {
  render() {
    return (
				<View style={styles.container}>
					<View style={styles.headingBox}>
          	<Text style={styles.heading1}>
            	List View Tester
          	</Text>
						<Text style={styles.heading2}>
            	{intro.heading}
          	</Text>
          	<Text style={styles.content}>
            	{intro.description}
          	</Text>
        	</View>
					<View style={styles.listBox}>
						<Text style={styles.heading3}>
							names...
						</Text>
						<FlatList
							data={[
								{key: 'Amelia'},
								{key: 'Beatrice'},
								{key: 'Daisy'},
								{key: 'Elizabeth'},
								{key: 'Emma'},
								{key: 'Evelyn'},
								{key: 'Georgiana'},
								{key: 'Jane'},
								{key: 'Rose'},
								{key: 'Victoria'},
								{key: 'Violet'},
								{key: 'Yvaine'},
							]
							}
							renderItem={({item}) => <Text style={styles.listItem}>{item.key}</Text>}
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
  headingBox: {
		flex: 1,
		flexShrink: 1,
    backgroundColor: '#585459',
    margin: 10,
	},
	subHeadingBox: {
    flex: 1,
    backgroundColor: '#7D787F',
		margin: 10,
		marginTop: 0,
  },
  contentBox: {
    flex: 2,
    backgroundColor: '#A3C1AD',
    margin: 10,
    marginTop: 0,
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
		fontSize: 12,
		color: '#7D787F',
		marginLeft: 20,
		marginTop: 10,
		marginBottom: 10,
	}
});

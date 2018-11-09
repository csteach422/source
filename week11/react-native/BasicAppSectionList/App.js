/*
* App.js - BasicAppSectionList
* - starter app for testing basic section list component
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
	'description': 'example list - SectionList'
};

export default class SectionListTester extends Component {
  render() {
    return (
				<View style={styles.container}>
					<View style={styles.headingBox}>
          	<Text style={styles.heading1}>
            	List View Tester
          	</Text>
        	</View>
					<View style={styles.subHeadingBox}>
						<Text style={styles.heading2}>
            	{intro.heading}
          	</Text>
          	<Text style={styles.content}>
            	{intro.description}
          	</Text>
					</View>
					<View style={styles.listHeadingBox}>
						<Text style={styles.heading3}>
							names...
						</Text>
					</View>
					<View style={styles.listBox}>
						<SectionList
  						sections={[
								{title: 'a', data:[{key: 1, name: 'Amelia'}]},
								{title: 'b', data:[{key: 1, name: 'Beatrice'}]},
  							{title: 'c', data: [{key: 1, name: 'Daisy'}, {key: 2, name: 'Devon'}]},
								{title: 'e', data: [{key: 1, name: 'Elizabeth'}, {key: 2, name: 'Emma'}, {key: 3, name: 'Evelyn'}]},
								{title: 'g', data:[{key: 1, name: 'Georgiana'}]},
								{title: 'j', data:[{key: 1, name: 'Jane'}]},
								{title: 'r', data:[{key: 1, name: 'Rose'}]},
								{title: 'v', data: [{key: 1, name: 'Victoria'}, {key: 2, name: 'Violet'}]},
								{title: 'y', data:[{key: 1, name: 'Yvaine'}]},
								]}

							//keyExtractor={item => item}
  						renderItem={({item}) => <Text style={styles.listItem}>{item.key} - {item.name}</Text>}
  						renderSectionHeader={({section}) => <Text style={styles.heading4}>{section.title}</Text>}
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
    marginTop: 20
  },
  headingBox: {
		flex: 1,
		flexShrink: 3,
    backgroundColor: '#333131',
    margin: 10,
	},
	subHeadingBox: {
    flex: 2,
		flexShrink: 2,
    backgroundColor: '#4C494A',
		margin: 10,
		marginTop: 0,
		marginBottom: 0,
  },
	listHeadingBox: {
    flex: 1,
		flexShrink: 5,
    backgroundColor: '#999293',
		margin: 10,
		marginTop: 10,
		marginBottom: 0,
  },
  contentBox: {
    flex: 2,
    backgroundColor: '#84D3E2',
    margin: 10,
    marginTop: 0,
	},
	listBox: {
		flex: 3,
		flexGrow: 7,
		backgroundColor: '#DDDDDD',
		margin: 10,
		marginTop: 0,
	},
  heading1: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    margin: 20,
	},
	heading2: {
    fontSize: 18,
    color: 'white',
    textAlign: 'left',
    margin: 20,
    marginBottom: 10,
  },
  heading3: {
    fontSize: 16,
    color: 'white',
    textAlign: 'left',
    margin: 20,
  },
	heading4: {
    fontSize: 14,
    color: '#4C3F42',
    textAlign: 'left',
    margin: 10,
  },
  content: {
    fontSize: 13,
    color: 'white',
    margin: 20,
    marginTop: 0,
		marginBottom: 0,
	},
	listItem: {
		fontSize: 12,
		color: '#333131',
		marginLeft: 20,
		marginTop: 10,
		marginBottom: 10,
	}
});

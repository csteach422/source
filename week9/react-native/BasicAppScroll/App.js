/**
 * BasicAppScroll - App.js
 * - basic example of scroll view
 */

import React, { Component } from 'react';
import {
	AppRegistry,
	ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

const intro = {
	'heading': 'fun with scrolling',
	'description': 'a test intro for scroll views...try scrolling down the screen'
};

export default class ScrollTester extends Component {
  render() {
    return (
      <ScrollView>
				<View style={styles.container}>
					<View style={styles.headingBox}>
          	<Text style={styles.heading1}>
            	Scroll View Tester
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
					<View style={styles.contentBox}>
          	<Text style={styles.heading3}>
            	Lorem Ipsum Generator
          	</Text>
          	<Text style={styles.content}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis orci vel massa volutpat elementum. Etiam ultrices nisi sapien, ac feugiat sem dapibus et. Duis tempus tellus vitae augue ullamcorper, imperdiet sodales arcu ornare. Vestibulum euismod, nunc vel maximus vehicula, diam dolor consectetur nulla, id consequat orci quam quis orci. Etiam eu tempus lectus. Maecenas pellentesque molestie ex, non facilisis odio elementum id. Donec eu tristique mi.
						</Text>
						<Text style={styles.content}>
							Maecenas fermentum quis erat a fringilla. Nunc in nisl vitae nibh luctus efficitur a a ex. Duis sit amet cursus tortor. Curabitur viverra diam ut diam mollis pretium. Ut accumsan mauris leo, at fringilla augue vestibulum at. Vestibulum posuere lorem et ligula vulputate elementum fringilla vitae ipsum. Nullam quis nisl in nibh porta lacinia sit amet sit amet lacus. Ut tristique accumsan odio, non ultricies lorem tristique sit amet. Ut non diam hendrerit, maximus nunc nec, aliquet lectus. Duis convallis pretium sapien feugiat aliquam. Nam vel lectus auctor, imperdiet mi sit amet, efficitur neque.
            </Text>
						<Text style={styles.content}>
							Sed ullamcorper, massa quis consectetur aliquam, risus leo finibus nibh, vel porttitor nulla ligula bibendum nibh. Duis semper nisl id purus mattis, non egestas felis imperdiet. Suspendisse laoreet nulla eleifend est imperdiet viverra. Ut vel fermentum risus. Sed aliquam mollis porttitor. Etiam turpis magna, posuere non hendrerit sit amet, faucibus eu velit. Aenean aliquet leo sit amet erat faucibus rhoncus. Maecenas ut accumsan ipsum. Duis dignissim rhoncus dictum. Donec dapibus, velit in hendrerit ultricies, ex nisi gravida mauris, sed convallis ante diam ut dolor. Proin rhoncus eget neque eu vulputate.
						</Text>
        	</View>
      	</View>
			</ScrollView>
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
    backgroundColor: '#4B5950',
    margin: 10,
	},
	subHeadingBox: {
    flex: 1,
    backgroundColor: '#6C7F72',
		margin: 10,
		marginTop: 0,
  },
  contentBox: {
    flex: 2,
    backgroundColor: '#A3C1AD',
    margin: 10,
    marginTop: 0,
  },
  heading1: {
    fontSize: 22,
    color: '#C2E5CE',
    textAlign: 'center',
    margin: 20,
	},
	heading2: {
    fontSize: 18,
    color: '#D7FFE5',
    textAlign: 'left',
    margin: 20,
    marginBottom: 10,
  },
  heading3: {
    fontSize: 16,
    color: '#666',
    textAlign: 'left',
    margin: 20,
  },
  content: {
    fontSize: 14,
    color: 'white',
    margin: 20,
    marginTop: 0,
  },
});

AppRegistry.registerComponent('BasicAppScrolls', () => ScrollTester);

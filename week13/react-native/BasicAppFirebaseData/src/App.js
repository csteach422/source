/*
* BasicAppFirebaseData
* - App.js
*/

import React from 'react';
// import { Button, FlatList, StyleSheet, Text, View} from 'react-native';
import RootStack from './config/routes';
import { createStackNavigator, createAppContainer } from 'react-navigation';

// import CardOutput from './components/Card';
import { initApi } from './services/api';

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {

	componentWillMount() {
    initApi();
  }

  render() {
    return <AppContainer />;
  }
}

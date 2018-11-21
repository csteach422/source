/*
* BasicAppFirebaseData
* - ./config/routes.js
* - define routes for app
*/

import HomeScreen from '../screens/homescreen';
import DataScreen from '../screens/datascreen';
import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
		Data: DataScreen
    // Login: LoginScreen,
		// Logout: LogoutScreen
  },
  {
    initialRouteName: 'Home',
  }
);

export default RootStack;

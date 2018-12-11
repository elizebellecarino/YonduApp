import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation'
import FrontPageScreen from './src/components/screens/FrontPage/FrontPageScreen'
import HomeScreen from './src/components/screens/HomeScreen'
import MainDrawers from './src/components/Navigators/MainDrawers/MainDrawers'
import IndustriesStack from './src/components/Navigators/Industries/IndustriesStack/IndustriesStack'


export default class App extends Component {
  render() {
    return (
      <SwitchNav />
    );
  }
}

const SwitchNav = createSwitchNavigator({
  FrontPage: FrontPageScreen,
  Home: HomeScreen,
  Entry: MainDrawers
  },
 {
   initialRouteName: 'FrontPage'
 });


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

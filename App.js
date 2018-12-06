import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation'
import FrontPageScreen from './src/components/screens/FrontPage/FrontPageScreen'
import HomeScreen from './src/components/screens/HomeScreen'
import WhatWeDoNav from './src/components/Navigators/WhatWeDo/WhatWeDoNav/WhatWeDoNav'



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
  WhatWeDo: WhatWeDoNav
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

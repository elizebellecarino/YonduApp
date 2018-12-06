import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions } from 'react-native'
import {createDrawerNavigator, DrawerItems} from 'react-navigation'
import WhatWeDoStack from '../WhatWeDoStack/WhatWeDoStack'
import IndustriesScreen from '../../../screens/HomePage/IndustriesScreen'
import InsightsScreen from '../../../screens/HomePage/InsightsScreen'
import CareersScreen from '../../../screens/HomePage/CareersScreen'
import AboutYonduScreen from '../../../screens/HomePage/AboutYonduScreen'
import ContactUsScreen from '../../../screens/HomePage/ContactUsScreen'

const Drawer = (props) => (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ height: 20, backgroundColor: 'white', justifyContent: "center" }}>
      </View>
        <View>
          <DrawerItems {...props} />
        </View>
    </SafeAreaView>

)
const WhatWeDoNav = createDrawerNavigator({
  'What We Do?': WhatWeDoStack,
  'Industries': IndustriesScreen,
  'Insights': InsightsScreen,
  'Careers': CareersScreen,
  'About Yondu': AboutYonduScreen,
  'Contact Us': ContactUsScreen,
    
}, {
    contentComponent: Drawer,
    drawerWidth: Dimensions.get('window').width*.75,
    contentOptions: {
      activeTintColor: '#66CC99',
      activeBackgroundColor: 'transparent',
    labelStyle:{
      fontSize: 15,
      fontWeight: 'normal'
    }
    }
 }
)
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    border: {
        borderBottomColor: "#a9a9a9",
        borderBottomWidth:1,
        width:"100%",
        minHeight:25,
        
    }
})

export default WhatWeDoNav;
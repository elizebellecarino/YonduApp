import React,{ Component }  from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'
import { createStackNavigator, createMaterialTopTabNavigator, createSwitchNavigator } from 'react-navigation'; 
import WhatWeDoScreen from '../../../screens/HomePage/WhatWeDoScreen'
import GetAQuoteScreen from '../../../screens/WhatWeDo/GetAQuote/GetAQuoteScreen'
import ThankYouScreen from '../../../screens/WhatWeDo/ThankYouScreen/ThankYouScreen'

export default WhatWeDoStack = createStackNavigator({
        WhatWeDo:{
            screen:WhatWeDoScreen,
            navigationOptions:
              ({navigation}) =>  {
               return{
                headerTintColor:'black',
                title: 'What We Do',
                headerStyle:{
                    backgroundColor:'white',
                    
                },
                headerLeft:
                  <Icon onPress={() => navigation.openDrawer()} 
                      name='ios-menu' size={30} color='black' style={{marginLeft:10}} />
             }
          }
        
        },
        GetAQuote:{
            screen: GetAQuoteScreen,
            navigationOptions:
              ({navigation}) =>  {
               return{
                headerTintColor:'black',
                title: 'Get a Quote',
                headerStyle:{
                    backgroundColor:'white',
                    
                },
                headerLeft:
                  <Icon onPress={() => navigation.goBack()} 
                      name='ios-arrow-back' size={30} color='black' style={{marginLeft:10}} />
             }
          }
        
        },
        ThankYou:{
            screen: ThankYouScreen,
            navigationOptions: {
              header: null
             }
          }

    },
      {
          headerLayoutPreset: 'center'
      }
    )
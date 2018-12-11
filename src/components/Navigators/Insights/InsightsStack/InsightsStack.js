import React,{ Component }  from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'
import { createStackNavigator, createMaterialTopTabNavigator, createSwitchNavigator } from 'react-navigation'; 
import InsightsScreen from '../../../screens/HomePage/InsightsScreen'
import InsightsContent from '../../../screens/Insights/InsightsContent/InsightsContent'

export default InsightsStack = createStackNavigator({
        Insights:{
            screen: InsightsScreen,
            navigationOptions:
              ({navigation}) =>  {
               return{
                headerTintColor:'black',
                title: 'Insights',
                headerStyle:{
                    backgroundColor:'white',
                    
                },
                headerLeft:
                  <Icon onPress={() => navigation.openDrawer()}
                      name='ios-menu' size={30} color='black' style={{marginLeft:10}} />
             }
          }
        
        },

       InsightsContent:{
            screen: InsightsContent,
            navigationOptions:
              ({navigation}) =>  {
               return{
            header: null
            }
        }
    }
    },
      {
          headerLayoutPreset: 'center'
      }
    )
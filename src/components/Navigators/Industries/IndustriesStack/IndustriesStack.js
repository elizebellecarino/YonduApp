import React,{ Component }  from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'
import { createStackNavigator, createMaterialTopTabNavigator, createSwitchNavigator } from 'react-navigation'; 
import IndustriesScreen from '../../../screens/HomePage/IndustriesScreen'

export default IndustriesStack = createStackNavigator({
        Industries:{
            screen: IndustriesScreen,
            navigationOptions:
              ({navigation}) =>  {
               return{
                headerTintColor:'black',
                title: 'Industries',
                headerStyle:{
                    backgroundColor:'white',
                    
                },
                headerLeft:
                  <Icon onPress={() => navigation.openDrawer()}
                      name='ios-menu' size={30} color='black' style={{marginLeft:10}} />
             }
          }
        
        }
       
    },
      {
          headerLayoutPreset: 'center'
      }
    )
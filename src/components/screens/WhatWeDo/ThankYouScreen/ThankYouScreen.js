import React, { Component } from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'
import DefaultButton1 from '../../../DefaultButtons/DefaultButton1'

   class ThankYouScreen extends Component{
     render(){
     return(
     
    <View style={styles.container}>
      <View>
          <Text>Thank You</Text>
      </View>
      <View style={styles.buttonContent}>
          <DefaultButton1 onPress={() => this.props.navigation.navigate('Home')}>Get Quota</DefaultButton1>
         </View>
      </View>
      )}
    }

        const styles= StyleSheet.create({
        container:{
            flex:1,
            backgroundColor: 'white'
        },
        buttonContent: {
            flex: 1
        }
    })
export default ThankYouScreen;
import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, Picker} from 'react-native'
import DefaultButton1 from '../../../DefaultButtons/DefaultButton1'
import Solutions from '../../../Picker/Solutions/Solutions'

   class GetAQuoteScreen extends Component{
    state = {
        list: ''
    }
    updateList = (list) => {
       this.setState({ list: list })
    }
     render(){
     return(
     
    <View style={styles.container}>
      <Solutions />
      <View style={styles.buttonContent}>
          <DefaultButton1 onPress={() => this.props.navigation.navigate('ThankYou')}>Submit</DefaultButton1>
         </View>
      </View>
      )}
    }

        const styles= StyleSheet.create({
        container:{
            flex:1,
            backgroundColor: 'white'
        },
        pickerContent: {
            flex: 1,
            marginVertical: 10
        },
        buttonContent: {
            flex: 1
        }
    })
export default GetAQuoteScreen;
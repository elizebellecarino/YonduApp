import React, { Component } from 'react'
import {View,Text,StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import DefaultButton1 from '../../DefaultButtons/DefaultButton1'
import Content from '../../screens/WhatWeDo/Content/Content'
  
class WhatWeDoScreen extends Component{
    render(){
      return(
        <View style={styles.container}>
        <ScrollView>
          <Content />
         <View style={styles.buttonContent}>
          <DefaultButton1 onPress={() => this.props.navigation.navigate('GetAQuote')}>Get Quota</DefaultButton1>
         </View>
         </ScrollView>
    </View>
    )}
}
    
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#F5FCFF'
  },
  buttonContent: {
    flex: 1
  }
})

export default WhatWeDoScreen;
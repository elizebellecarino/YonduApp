import React, { Component } from 'react'
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'

  class HomeScreen extends Component{
    render(){
      return(
        <View style={styles.container}>
          <View style={styles.homeOptionsContent}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('WhatWeDo')}>
              <Text style={styles.textOptions}>What We Do</Text></TouchableOpacity>
          </View>
          <View style={styles.homeOptionsContent}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('WhatWeDo')}>
              <Text style={styles.textOptions}>Industries</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.homeOptionsContent}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('WhatWeDo')}>
              <Text style={styles.textOptions}>Insights</Text></TouchableOpacity>
          </View>
          <View style={styles.homeOptionsContent}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('WhatWeDo')}>
              <Text style={styles.textOptions}>Careers</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.homeOptionsContent}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('WhatWeDo')}>
              <Text style={styles.textOptions}>About Yondu</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.homeOptionsContent}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('WhatWeDo')}>
              <Text style={styles.textOptions}>Contact Us</Text>
            </TouchableOpacity>
        </View>
    </View>
    )}
}
    
const styles = StyleSheet.create({
  container:{
    flex:1 
  },
  homeOptionsContent:{
    flex:1,
    backgroundColor: '#D8D8D8',
    justifyContent: 'center',
    alignItems:'center',
    },
  textOptions:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#008167'
  }
})

export default HomeScreen;
import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'

  class HomeScreen extends Component{
    render(){
      return(
        <View style={styles.container}>
          <View style={styles.homeOptionsContent}>
             <TouchableOpacity onPress={() => this.props.navigation.navigate('WhatWeDo')}>
               <ImageBackground style={styles.imageHolder} source={require('../../../assets/what_we_do.jpg')}>
                 <Text style={styles.textOptions}>What We Do</Text>
               </ImageBackground>
              </TouchableOpacity>
          </View>
          <View style={styles.homeOptionsContent}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Industries')}>
              <ImageBackground style={styles.imageHolder} source={require('../../../assets/industries.jpg')}>
                <Text style={styles.textOptions}>Industries</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View style={styles.homeOptionsContent}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Insights')}>
              <ImageBackground style={styles.imageHolder} source={require('../../../assets/insights.jpg')}>
                <Text style={styles.textOptions}>Insights</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View style={styles.homeOptionsContent}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('WhatWeDo')}>
              <ImageBackground style={styles.imageHolder} source={require('../../../assets/careers.jpg')}>
                <Text style={styles.textOptions}>Careers</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View style={styles.homeOptionsContent}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('WhatWeDo')}>
              <ImageBackground style={styles.imageHolder} source={require('../../../assets/about_yondu.jpg')}>
                <Text style={styles.textOptions}>About Yondu</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View style={styles.homeOptionsContent}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('WhatWeDo')}>
              <ImageBackground style={styles.imageHolder} source={require('../../../assets/contact_us.jpg')}>
                <Text style={styles.textOptions}>Contact Us</Text>
              </ImageBackground>
            </TouchableOpacity>
        </View>
    </View>
    )}
}
    
const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  homeOptionsContent:{
    width: '100%',
    flex: 1
    },
  textOptions:{
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: 'white'
  },
  imageHolder: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default HomeScreen;
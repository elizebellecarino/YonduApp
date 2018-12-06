import React, { Component } from 'react'
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'
import LocalImage from '../../LocalImage/LocalImage'
   class FrontPageScreen extends Component{
     render(){
    return(
    <View style={styles.container}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
        <LocalImage
         source={require('../../../../assets/yondu.jpg')} 
         originalWidth={361}
         originalHeight={79}
        />
        </TouchableOpacity>
    </View>
    )}
    }
    const styles = StyleSheet.create({
      container:{ 
        flex:1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    }

    })
export default FrontPageScreen;
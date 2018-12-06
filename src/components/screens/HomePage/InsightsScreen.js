import React, { Component } from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'

   class InsightsScreen extends Component{
     render(){
     return(
     
    <View style={styles.container}>
      <View>
          <Text>Insights Screen</Text>
      </View>
      </View>
      )}
    }

        const styles= StyleSheet.create({
        container:{
            flex:1
        }
    })
export default InsightsScreen;
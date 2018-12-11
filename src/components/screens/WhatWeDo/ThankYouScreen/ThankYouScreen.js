import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, ScrollView} from 'react-native'
import DefaultButton1 from '../../../DefaultButtons/DefaultButton1'
import LocalImageThankYou from '../../../LocalImage/LocalImageThankYou'

   class ThankYouScreen extends Component{
     render(){
     return(
     
    <ScrollView style={styles.container}>
     <View style={styles.imageContent}>
      <LocalImageThankYou
         source={require('../../../../../assets/clive-thank-you.png')} 
         originalWidth={300}
         originalHeight={390}
        />
      </View>
        <View style={styles.textEnquiryContent}>
            <Text style={styles.textEnquiry}>Thank you for your enquiry</Text>
        </View>
        <View style={styles.textSentContent}>
            <Text style={styles.textSent}>Your message has been sent</Text>
            <Text style={styles.textSent}>sent successfully.</Text>
        </View>
      <View style={styles.buttonContent}>
          <DefaultButton1 onPress={() => this.props.navigation.navigate('Home')}>Back to Home</DefaultButton1>
         </View>
         
      </ScrollView>
    
      )}
    }

        const styles= StyleSheet.create({
        container:{
            flex:1,
            backgroundColor: 'white'
        },
        imageContent: {
            flex: 0.6,
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: 8,
            paddingRight: 8,
            marginTop: 30  
        },
        textEnquiryContent: {
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
        },
        textEnquiry: {
            fontSize: 20,
            fontWeight: 'normal',
            color: 'black',
            
        },
        textSentContent: {
            flex: 0.9,
            justifyContent: 'center',
            alignItems: 'center',
           
        },
        textSent: {
            fontSize: 17,
            fontWeight: 'normal',
            color: '#6E7F8D'
        },
        buttonContent: {
            flex: 1,
            marginTop: 70,
        }
    })
export default ThankYouScreen;
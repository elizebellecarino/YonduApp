import React, { Component } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
class IndustriesScreen extends Component {
  render() {
    return (
      
      <ScrollView style={styles.container}>
        <View style={styles.textHeaderContainer}>
          <Text style={styles.textHeader}>Lorem ipsum dolor sit amet</Text>
          <View style={styles.subTextContent}>
            <Text style={styles.subText}>Quisque a est vel tortor</Text>
            <Text style={styles.subText}>lobortis scelerisque</Text>
            <Text style={styles.subText}>vitae id risus.</Text>
          </View>
        </View>
        <View />
        <View style={{alignItems: 'center', flex: 3}}>
        <View style={styles.industriesContent}>
          <View style={styles.imageContent}>
            <Image
              style={styles.imageSize}
              source={require('../../../../assets/ict.png')}
            />
            <Text>ICT</Text>
          </View>
          <View style={styles.imageContent}>
            <Image
              style={styles.imageSize}
              source={require('../../../../assets/bpo.png')}
            />
            <Text>BPO</Text>
          </View>
        </View>

        <View style={styles.industriesContent}>
          <View style={styles.imageContent}>
            <Image
              style={styles.imageSize}
              source={require('../../../../assets/banking_finance.png')}
            />
            <Text>Banking and Finance</Text>
          </View>
          <View style={styles.imageContent}>
            <Image
              style={styles.imageSize}
              source={require('../../../../assets/real_estate.png')}
            />
            <Text>Real Estate</Text>
          </View>
        </View>

        <View style={styles.industriesContent}>
          <View style={styles.imageContent}>
            <Image
              style={styles.imageSize}
              source={require('../../../../assets/government.png')}
            />
            <Text>Government</Text>
          </View>
          <View style={styles.imageContent}>
            <Image
              style={styles.imageSize}
              source={require('../../../../assets/manufacturing.png')}
            />
            <Text>Manufacturing</Text>
          </View>
        </View>

        <View style={styles.industriesContent}>
          <View style={styles.imageContent}>
            <Image
              style={styles.imageSize}
              source={require('../../../../assets/construction.png')}
            />
            <Text>Construction</Text>
          </View>
          <View style={styles.imageContent}>
            <Image
              style={styles.imageSize}
              source={require('../../../../assets/retail.png')}
            />
            <Text>Retail</Text>
          </View>
        </View>
        </View>
        </ScrollView>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
     backgroundColor: 'white'
  },
  textHeaderContainer: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center'
  },
  textHeader: {
    color: 'black',
    fontSize: 17,
    fontStyle: 'normal'
  },
  subTextContent: {
    marginVertical: 13,
    alignItems: 'center'
  },
  subText: {
    fontSize: 15 
  },
  industriesContent: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15
   
  },
  imageSize: {
    height: 70,
    width: 70
  },
  imageContent: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default IndustriesScreen;

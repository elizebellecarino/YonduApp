import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import React, { Component } from 'react';
import { insights } from '../../Array/Array'

class InsightsScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
      <View style={{flex: 1, alignItems: 'center'}}>
        {insights.map((items, index) => (
          <TouchableOpacity key={index} style={styles.subContainer}
          onPress={() => this.props.navigation.navigate('InsightsContent')}>
            <View style={styles.detailContent}>
              <Text style={styles.titleText}>{items.title}</Text>
              <Text style={styles.detailsText}>{items.details}</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.subTitleText}>{items.subTitle}</Text>
                <Text style={styles.dateText}> {items.date}</Text>
              </View>
            </View>
            <View style={styles.imageHolder}>
            
            </View>
          </TouchableOpacity>
        ))}
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container :{
    backgroundColor: 'white'
  },
  subContainer: {
    alignItems: "center",
    width: '99%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 12,
    borderBottomColor: '#D8D8D8' ,
    borderBottomWidth: 1,
    paddingBottom: 5,
    paddingHorizontal: 10,
    },
  detailContent: {
    width: '77%',
  },
  titleText: {
    fontSize: 17,
    fontStyle: 'normal',
    color: 'black'
  },
  detailsText: {
    fontSize: 14,
    marginVertical: 3
  },
  subTitleText: {
    marginTop: 4,
    fontSize: 12,
    fontStyle: 'italic'
  },
  dateText: {
    marginTop: 4,
    fontSize: 12,
    fontStyle: 'italic'
  },
  imageHolder: {
    height: '90%',
    width: 80,
    backgroundColor: '#D8D8D8'
    
  }
});
export default InsightsScreen;

    
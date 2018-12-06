import React, { Component } from 'react'
import { View, Text, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {whatWeDoContent} from '../../../Array/Array'

class Content extends Component{
    state={
        items: whatWeDoContent
    }
  render(){
    return(
        <View>
          {this.state.items.map((item,key) => {
            return(
              <View style={styles.blockContent} key={key}>
                <View style={styles.iconTitleContent}>
                  <View style={styles.iconContent}>
                    <Icon name={item.icon} size={30}/>
                  </View>
            <View style={styles.titleContent}>
              <Text style={styles.titleText}>{item.title}</Text>
            </View>
            </View>
 
            <View style={styles.subContent}>
              {item.subContents.map((item,key) =>{
                return(
                  <Text style={styles.subContentText} key={key}>{item}</Text>
                )
             })
             }
            </View>
            </View>
            )
        }
        )}</View>
    )
}
}


const styles = StyleSheet.create({
  blockContent:{
    flex:1,
    alignItems: 'flex-start',
    margin: 10,
    marginLeft: 10,
    marginRight: 10,
    borderLeftWidth: 3,
    borderLeftColor: '#66CC99',
    backgroundColor: 'white'
  },
  iconTitleContent:{
    flex: 2,
    flexDirection: 'row',
  },
  iconContent:{
    flex: 3,
    alignItems: 'center'
  },
  titleContent:{
    flex: 10,
    alignItems: 'flex-start',
    marginRight: 83
  },
  titleText:{
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black'
  },
  subContent:{
    flex: 4,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: 35
  },
  subContentText:{
    fontSize:15,
    color:"#6E7F8D"
  }
})

export default Content;
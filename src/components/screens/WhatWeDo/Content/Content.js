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
        )}
        </View>
    )
}
}


const styles = StyleSheet.create({
  blockContent:{
    flex:1,
    alignItems: 'flex-start',
    alignItems: 'flex-start',
    margin: 20,
    marginVertical: 10,
    elevation: 15,
    width: '88%',
    borderLeftWidth: 4,
    borderLeftColor: '#66CC99',
    backgroundColor: 'white', 
    paddingVertical: 15
  },
  iconTitleContent:{
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconContent:{
    flex: 3,
    alignItems: 'flex-end',
    paddingRight: 10
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
    paddingLeft: 35
  },
  subContentText:{
    fontSize:15,
    color:"#6E7F8D"
  }
})

export default Content;
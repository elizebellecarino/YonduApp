import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native'
import { solutions } from '../../Array/Array'
import { services } from '../../Array/Array'

class Solutions extends Component {
    state = {
        lists: '',
        items: solutions
    };

    render() {
        return (
          <View style={styles.container}>
            <View style={styles.pickerContent}>
                <Picker
                    mode= 'dropdown'
                    selectedValue= {this.state.lists}
                    style= {{ height: 50, width: 330, borderBottomColor: 'black', borderBottomWidth: 2 }}
                    onValueChange={(itemValue) => this.setState({ lists: itemValue })}>
                         <Picker.Item label= 'What solution do you need?' value= '' />
                    {this.state.items.map((items, key) => (
                        <Picker.Item label={items.name} value={items.name} key={key} />
                    ))}
                </Picker>
            </View>
          </View>
        )
    }

}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white'
  },
  pickerContent: {
      flex: 0.3,
      justifyContent: 'center',
      alignItems: 'center',
     
  }
})

export default Solutions
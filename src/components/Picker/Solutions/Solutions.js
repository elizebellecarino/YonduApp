import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native'
import { solutions } from '../../Array/Array'

class Solutions extends Component {
    state = {
        lists: '',
        items: solutions
    };

    render() {
        return (
            <View>
                <Picker
                    mode="dropdown"
                    selectedValue={this.state.lists}
                    style={{ height: 50, width: 200 }}
                    onValueChange={(itemValue) => this.setState({ lists: itemValue })}>

                    {this.state.items.map((items, key) => (
                        <Picker.Item label={items.name} value={items.name} key={key} />
                    ))}


                </Picker>
            </View>
        )
    }

}


const styles = StyleSheet.create({
  pickerContent: {
      
  }
})

export default Solutions
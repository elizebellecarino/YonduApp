import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
const DefaultButton1 = props => (
    <TouchableOpacity onPress={props.onPress}>
        <View style={[styles.button,{backgroundColor:'#66CC99'},props.border]}> 
            <Text style={[{color: 'white', fontSize: 16},props.textColor, props.textWeight]}>{props.children}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
      padding: 10,
      margin: 5,
      borderRadius: 20,
      alignItems: 'center',
      width: '80%',
      alignSelf:"center"
    }
})

export default DefaultButton1;
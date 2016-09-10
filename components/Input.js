import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default class Input extends Component {
    render() {
        return ( 
        	<View>
        	<Text style={styles.text}>USERNAME</Text>
        	<TextInput placeholder="username" placeholderTextColor="#90A4AE" style={styles.inputBox}>
            </TextInput>
            <Text style={styles.text}>PASSWORD</Text>
            <TextInput placeholder="password" placeholderTextColor="#90A4AE" style={styles.inputBox}></TextInput>
            </View>
        )
    }
}

var styles = StyleSheet.create({
 text: {
 	color: '#FF1744',
 },
 inputBox: {
 	width: 150,
 	height: 16
 }
});

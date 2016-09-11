import React, { Component, PropTypes } from 'react';
import { AppRegistry, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { styles } from '../styles'

export default class Input extends Component {
    constructor(props) {
    	super(props)
    	this.state = {
        	username: '',
        	password: ''
    	}
    }
    render() {
        return ( 
        	<View >
                    <Text style={styles.text}>USERNAME</Text>
                    <TextInput placeholder="username"
                    placeholderTextColor="#90A4AE"
                    style={styles.inputBox} onChangeText={(username) => this.setState({username})} value={this.state.username}>
                    </TextInput> 
                    <Text style={styles.text}>PASSWORD
                    </Text>
                    <TextInput password={true} placeholder="password"
                    placeholderTextColor="#90A4AE" style={styles.inputBox} onChangeText={(password) => this.setState({password})} value={this.state.password}>
                    </TextInput>
            </View>
        )
    }
}

// var styles = StyleSheet.create({
//     text: {
//         color: '#FF1744',
//     },
//     inputBox: {
//         width: 150,
//         height: 16
//     }
// });

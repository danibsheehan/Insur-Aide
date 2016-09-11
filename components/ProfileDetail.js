import React, { Component, PropTypes } from 'react';
import { AppRegistry, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { styles } from '../styles'
import ResultList from './components/ResultList'
import Button from './components/Button'

export default class ProfileDetail extends Component {
	constructor(props) {
		super(props)
		this.props.text = 'Message';
	}
	render() {
		return {
			//user's image, username, and summary component
			<ResultList></ResultList>
			//user's story description
			<View>
				<TextArea>{this.props.story}</TextArea>
			</View>
			//button to message user
			<Button></Button>
		}
	}
}
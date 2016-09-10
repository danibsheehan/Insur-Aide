import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PropTypes
} from 'react-native';

let profileData = {
	username: 'User123',
	headline: 'A user who uses',
	categories: ['Dental','Elder Care'],
	insurers: ['the Goose One','The Rock'],
	imgUrl: '#'
}

class MiniProfile extends Component {
	render () {
		return (
			<View style={{flex:1, flexDirection: 'row',marginTop: 20, padding: 10}}>
				<View style={{width: 80, height: 80, backgroundColor: "lightgray"}}>
					<Text >{profileData.imgUrl}</Text>
				</View>
				<View style={{width: 180, height: 80, paddingLeft: 10, paddingRight: 10}}>
					<Text style={{fontSize: 20, fontWeight: 'bold'}}>{profileData.username}</Text>
					<Text style={{fontSize: 20}}>{profileData.headline}</Text>
					<Text style={{fontSize: 12}}>{profileData.categories.join(', ')}</Text>
					<Text style={{fontSize: 12}}>{profileData.insurers.join(', ')}</Text>
				</View>
			</View>
		)
	}
}
// MiniProfile.propTypes = {
// 	 this.props.profileData = PropTypes.object.isRequired
// }

export default MiniProfile

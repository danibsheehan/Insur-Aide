import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


class MiniProfile extends Component {
	render () {
		return (
			<View style={{flex:1, flexDirection: 'row',marginTop: 20, padding: 10}}>
				<View style={{width: 80, height: 80, backgroundColor: "lightgray"}}>
					<Text >{this.props.profileData.imgUrl}</Text>
				</View>
				<View style={{width: 240, height: 80, paddingLeft: 10, paddingRight: 10}}>
					<Text style={{fontSize: 20, fontWeight: 'bold'}}>{this.props.profileData.username}</Text>
					<Text style={{fontSize: 20}}>{this.props.profileData.headline}</Text>
					<Text style={{fontSize: 12}}>{this.props.profileData.categories.join(', ')}</Text>
					<Text style={{fontSize: 12}}>{this.props.profileData.insurers.join(', ')}</Text>
				</View>
			</View>
		)
	}
}

export default MiniProfile

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';


class MiniProfile extends Component {
	render () {
		return (
			<View style={styles.profileComp}>
				<View style={styles.imgView}>
					<Image style={{width: 90, height: 90}} source={require("../images/default-avatar.png")}></Image>
				</View>
				<View style={styles.userDetails}>
					<Text style={styles.name}>{this.props.profileData.username}</Text>
					<Text style={styles.headline}>{this.props.profileData.headline}</Text>
					<Text style={styles.text}>{this.props.profileData.categories.join(', ')}</Text>
					<Text style={styles.text}>{this.props.profileData.insurers.join(', ')}</Text>
				</View>
			</View>

		)
	}
}
var styles =  StyleSheet.create({
	profileComp: {flex:1, flexDirection: 'row',marginTop: 10, justifyContent:'space-around'},
	imgView: {width: 100, height: 100, backgroundColor: "lightgray", justifyContent: 'center', alignItems: 'center'},
	userDetails: {width: 250, height: 100, padding: 5},
	name: {fontSize: 20, fontWeight: 'bold'},
	headline: {fontSize: 16, marginVertical: 5},
	text: {fontSize: 12}
})


export default MiniProfile

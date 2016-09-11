import React, { Component, PropTypes } from 'react';
import {
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
					<Image style={{width: 90, height: 90}} source={{uri:'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjryq_5wIfPAhUF8z4KHavfB4kQjRwIBw&url=http%3A%2F%2Fjames-camerons-avatar.wikia.com%2Fwiki%2FGrace_Augustine&psig=AFQjCNEV_j6WECjywT2141EASyE3dOqmQA&ust=1473689933032034'}}></Image>
				</View>
				<View style={styles.userDetails}>
					<Text style={styles.name}>{this.props.username}</Text>
					<Text style={styles.headline}>{this.props.headline}</Text>
					<Text style={styles.text}>{this.props.categories.join(', ')}</Text>
					<Text style={styles.text}>{this.props.insurers.join(', ')}</Text>
				</View>
			</View>

		)
	}
}

MiniProfile.propTypes = {
	username : PropTypes.string.isRequired,
	headline : PropTypes.string.isRequired,
	categories : PropTypes.array.isRequired,
	insurers : PropTypes.array.isRequired,
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

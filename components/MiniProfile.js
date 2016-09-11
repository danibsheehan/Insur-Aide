import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity
} from 'react-native';



class MiniProfile extends Component {
    constructor(props){
        super(props)
    }
    goToProfile(user){
        console.log(user)
    }
  render () {
    console.log('in mini profile', this.props)
    return (
      <View style={styles.profileComp} onPress={this.goToProfile.bind(this, this.props)}>
        <View style={styles.imgView}>
          <Image style={{width: 90, height: 90}} source={{uri:this.props.profile_picture}}></Image>
        </View>
        <View style={styles.userDetails}>
          <Text style={styles.name}>{this.props.username}</Text>
          <Text style={styles.headline}>{this.props.title}</Text>
          <Text style={styles.text}>{this.props.story.slice(0, 100)+"..."}</Text>
          <Text style={styles.text}>{this.props.problems}</Text>
          <TouchableOpacity onPress={()=>console.log('pressed')}>
          <Text>
            message
          </Text>
        </TouchableOpacity>
        </View>
      </View>
    )
  }
}

MiniProfile.propTypes = {
  username : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  story : PropTypes.string,
  problems : PropTypes.string,
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

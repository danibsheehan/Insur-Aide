import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity
} from 'react-native';
import {stylesObj} from '../styles'
const styles = StyleSheet.create(stylesObj);


class MiniProfile extends Component {
    constructor(props){
        super(props)
    }
    navigateToSingleProfile(cat) {
      console.log('singleProfile',this.props.navigator)
      this.props.navigator.push({
        ident: cat
      })
    }
    goToProfile(){
        //navigate to individual user's page
        this.navigateToSingleProfile('SingleProfile')
    }
  render () {
    console.log('in mini profile', this.props.navigator)
    return (
      <View style={styles.profileComp}>
        <View style={styles.imgView}>
          <Image style={{width: 90, height: 90}} source={{uri:this.props.profile_picture}}></Image>
        </View>
        <View style={styles.userDetails}>
          <TouchableOpacity onPress={this.goToProfile.bind(this, this.props)}>
          <Text style={styles.name}>{this.props.username}</Text>
          <Text style={styles.headline}>{this.props.title}</Text>
          <Text style={styles.text}>{this.props.story.slice(0, 100)+"..."}</Text>
          <Text style={styles.text}>{this.props.problems}</Text>
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

export default MiniProfile

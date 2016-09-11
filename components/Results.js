import React, { Component, PropTypes } from 'react';
import { Text, View} from 'react-native';
import MiniProfile from './MiniProfile'

export default class Results extends Component {
  render() {
    return (
      <View style={{marginTop: 50}}>
        <MiniProfile username='taffy' headline='is cool' categories={[1,2,3]} insurers={[4,5,6]}/>
      </View>
    )
  }

}
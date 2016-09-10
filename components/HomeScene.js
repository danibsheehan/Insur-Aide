import React, { Component, PropTypes } from 'react';
import { Text, View} from 'react-native';
import Button from './Button'

export default class HomeScene extends Component {
  render() {
    return (
      <View>
        <Text>Current Scene: { this.props.title }</Text>
          <Button text={'I need help'} press={this._navigateToGetHelp.bind(this)}/>
          <Button text={'I can help'} press={this._navigateToHelp.bind(this)}/>
      </View>
    )
  }

  _navigateToHelp(){
    this.props.navigator.push({
      ident: "ProvideHelp"
    })
  }

  _navigateToGetHelp(){
    this.props.navigator.push({
      ident: "GetHelp"
    })
  }

}


HomeScene.propTypes = {
  title: PropTypes.string,
  onForward: PropTypes.func,
  onBack: PropTypes.func
}
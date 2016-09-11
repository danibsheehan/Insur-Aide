import React, { Component, PropTypes } from 'react';
import { Text, View} from 'react-native';
import Button from './Button'
import Store from '../store'

export default class GetHelp extends Component {
  render() {
    return (
      <View>
        <Button text={Store.insurance} press={this._navigateToOptions.bind(this, 'Insurance')} />
      </View>
    )
  }

  _navigateToOptions(cat){
    this.props.navigator.push({
      ident: cat
    })
  }
}
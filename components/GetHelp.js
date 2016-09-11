import React, { Component, PropTypes } from 'react';
import { Text, View} from 'react-native';
import Button from './Button'
import Store from '../store'
import updateUsers from '../firebase'
export default class GetHelp extends Component {
  render() {
    return (
      <View>
        <Button text={Store.insurance} press={this._navigateToOptions.bind(this, 'Insurance')} />
        <Button text={Store.locations} press={this._navigateToOptions.bind(this, 'Location')} />
        <Button text={Store.problems} press={this._navigateToOptions.bind(this, 'Problems')} />
        <Button text={'Enter'} press={this._navigateToResults.bind(this, 'Results')} />
      </View>
    )
  }

  _navigateToOptions(cat){
    this.props.navigator.push({
      ident: cat
    })
  }

  _navigateToResults () {
    updateUsers(Store.insurance, Store.location, Store.problems)
    .then(_navigateToOptions('Results'))
  }
}
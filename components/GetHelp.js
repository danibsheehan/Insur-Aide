import React, { Component, PropTypes } from 'react';
import { Text, View} from 'react-native';
import Button from './Button'
import Store from '../store'
import { updateUsers } from '../firebase'

export default class GetHelp extends Component {
  render() {
    return (
      <View>
        <Button text={Store.insurance} press={this._navigateToOptions.bind(this, 'Insurance')} />
        <Button text={Store.locations} press={this._navigateToOptions.bind(this, 'Location')} />
        <Button text={Store.problems} press={this._navigateToOptions.bind(this, 'Problems')} />
        <Button text={'Search'} press={this._searchWithOptions.bind(this)} />

      </View>
    )
  }

  _navigateToOptions(cat){
    this.props.navigator.push({
      ident: cat
    })
  }

  _navigateToResults(){
    this.props.navigator.push({
      ident: 'Browse'
    })
  }

  _searchWithOptions(){
    updateUsers(Store.insurance, Store.locations, Store.problems)
    .then(_navigateToResults)
  }

}
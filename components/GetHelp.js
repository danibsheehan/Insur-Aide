import React, { Component, PropTypes } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import Button from './Button'
import Search from './Search'
import Store from '../store'
import {updateUsers} from '../firebase'
import {stylesObj} from '../styles'
const styles = StyleSheet.create(stylesObj);

export default class GetHelp extends Component {
  render() {
    return (
      <View style={styles.help}>
        <Text style={styles.header}>SELECT</Text>
        <Button text={Store.insurance} press={this._navigateToOptions.bind(this, 'Insurance')} />
        <Button text={Store.locations} press={this._navigateToOptions.bind(this, 'Location')} />
        <Button text={Store.problems} press={this._navigateToOptions.bind(this, 'Problems')} />
        <Search text={'Search'} press={this._navigateToResults.bind(this, 'Results')} />
      </View>
    )
  }

  _navigateToOptions(cat){
    console.log('gethelp',this.props)
    this.props.navigator.push({
      ident: cat
    })
  }

  _navigateToResults () {
    updateUsers(Store.insurance, Store.location, Store.problems)
    .then(()=>this._navigateToOptions('Results'))
  }
}
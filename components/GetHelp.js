import React, { Component, PropTypes } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Button from './Button';
import Store from '../store';
import {stylesObj} from '../styles'
const styles = StyleSheet.create(stylesObj);

export default class GetHelp extends Component {
  render() {
    return (
      <View style={styles.help}>
        <Button text={Store.insurance} press={this._navigateToOptions.bind(this, 'Insurance')} />
        <Button text={Store.locations} press={this._navigateToOptions.bind(this, 'Location')} />
        <Button text={Store.problems} press={this._navigateToOptions.bind(this, 'Problems')} />
      </View>
    )
  }

  _navigateToOptions(cat){
    this.props.navigator.push({
      ident: cat
    })
  }
}
import React, { Component, PropTypes } from 'react';
import { Text, View} from 'react-native';
import Button from './Button'
import OptionList from './OptionList'

export default class Menu extends Component {
  constructor (props) {
  	super(props) 
  	this.state ={
  		showOptions: false
  	}
  }
  render() {
    return (
      <View>
        <Button text={"ffoo"} press={doStuff()}>Insurance</Button>
        { this._showOptions() }
      </View>
    )
  }
  _showOptions () {
  	if(!this.showOptions) {
  		return null
  	}
  	else {
  		return <OptionList select={"foo"}/> 
  	}
  }

}

function doStuff () {

}
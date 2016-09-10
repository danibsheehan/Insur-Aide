/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Test from './components/testComp.js'
import Input from './components/Input.js'
import {firebaseApp, createUser} from './firebase'

//this.usersRef = firebaseApp.database().ref("users");
class ReactApp extends Component {
  constructor (props) {
    super(props)
    
  }
  render() {
    return (
      <View style={styles.container}>
        <Input/>
      </View>
    );
  }
  _createUser (name, location, story, image, badges) {
    createUser("anna", "there", "life!", "none", 0)
    console.log(createUser)
  }
  _test() {
    console.log("stuff")
    console.log(this.itemsRef)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactApp', () => ReactApp);

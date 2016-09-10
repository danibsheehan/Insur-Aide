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
// import {firebaseApp} from './firebase'

import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDmqsfVyAB0rmYpms3YczKsrFPrYTXuyes",
    authDomain: "reactapp-a97ee.firebaseapp.com",
    databaseURL: "https://reactapp-a97ee.firebaseio.com",
    storageBucket: "reactapp-a97ee.appspot.com",
};

const firebaseApp = firebase.initializeApp(config);


class ReactApp extends Component {
  constructor (props) {
    super(props)
    this.usersRef = firebaseApp.database().ref();
  }
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text onPress={this._createUser.bind(this)} style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Test></Test>
      </View>
    );
  }
  _createUser (name, location, story, image, badges) {
    this.usersRef.push({
      username: "taffy",
      location: "here",
      story: "was born",
      badges: 0,
      profile_picture : "none"
    });
    console.log(this.usersRef)
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

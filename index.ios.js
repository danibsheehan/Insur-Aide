import React, { Component, PropTypes } from 'react';
import { Navigator, Text, View, AppRegistry } from 'react-native';
import HomeScene from './components/HomeScene'
import Test from "./components/Test";
import GetHelp from "./components/GetHelp";

export default class NavigationApp extends Component {
  _renderScene(route, navigator){
    var globalNavigatorProps = {navigator}

    console.log(route)
    switch(route.ident) {
      case "Home":
        return ( <View style={{marginTop: 50}}>
            <Text style={{textAlign: 'center'}}>Penetrating the Bureaucracy</Text>
            <HomeScene {...globalNavigatorProps}
            />
            </View>
          )
      case "ProvideHelp":
        return (
          <Test/>
          )
      case "GetHelp":
        return (
          <GetHelp />
        )
      default:
        return <Text>'!!Route Error!!'</Text>
    }

  }

  render() {
    return (
      <Navigator
        initialRoute={{ ident: 'Home' }}
        renderScene={this._renderScene}
        configureScene={(route) => ({
          ...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight })} 
      />
    )
  }
}

AppRegistry.registerComponent('ReactApp', () => NavigationApp);

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// import Button from './components/Button'

// class ReactApp extends Component {

//   _handlePress() {
//     console.log('Pressed!');
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Button press={this._handlePress} text={'This is a Button!'}/>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// AppRegistry.registerComponent('ReactApp', () => ReactApp);

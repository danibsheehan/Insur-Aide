import React, { Component, PropTypes } from 'react';
import { Navigator, Text, View, AppRegistry } from 'react-native';
import HomeScene from './components/HomeScene'
import Test from "./components/Test";
import GetHelp from "./components/GetHelp";
import Menu from "./components/menu";
import ResultList from './components/ResultList';
import OptionList from './components/OptionList'
import { getAllUsers } from "./firebase"

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
      case "Menu":
        return (<OptionList />);
      case "Browse":
        return (<ResultList users="users" />);
      default:
        return <Text>'!!Route Error!!'</Text>
    }
  }
  render() {
    return (
      <Navigator
        initialRoute={{ ident: 'Menu' }}
        renderScene={this._renderScene}
        configureScene={(route) => ({
          ...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight })} 
      />
    )
  }
}  
AppRegistry.registerComponent('ReactApp', () => NavigationApp);
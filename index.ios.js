import React, { Component, PropTypes } from 'react';
import { Navigator, Text, View, AppRegistry } from 'react-native';
import HomeScene from './components/HomeScene'
import GetHelp from "./components/GetHelp";
import OptionList from "./components/OptionList";
import SignIn from "./components/SignIn";
import Input from "./components/Input";
import ProfileDetail from "./components/ProfileDetail";
import TextArea from "./components/TextArea";

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
          <SignIn {...globalNavigatorProps}/>
          )
      case "GetHelp":
        return (
          <GetHelp {...globalNavigatorProps}/>
        )
      case "Insurance":
        return (
          <OptionList cat="insurance" {...globalNavigatorProps}/>
        )
      case "Location":
        return (
          <OptionList cat="locations" {...globalNavigatorProps}/>
        )
      case "Problems":
        return (
          <OptionList cat="problems" {...globalNavigatorProps}/>
        )
      case "SignIn":
        return (
            <Input btnType="Sign In" {...globalNavigatorProps}/>
        )
        case "SignUp":
          return (
              <Input btnType="Sign Up" {...globalNavigatorProps}/>
          )
      case "SingleProfile":
        return (
            <ProfileDetail {...globalNavigatorProps}/>
        )
        case "Message":
          return (
              <TextArea {...globalNavigatorProps}/>
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

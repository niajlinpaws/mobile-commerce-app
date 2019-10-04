import React, { Component } from "react";
import SwitchNavigator from "./SwitchNavigator";
import SplashScreen from "react-native-splash-screen";

export default class App extends Component {
  componentDidMount(){
    SplashScreen.hide();
  }

  render() {
    return (
      <SwitchNavigator/>
    );
  }
}


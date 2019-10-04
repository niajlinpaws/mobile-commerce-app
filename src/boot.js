import React, { Component } from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import configureStore from "./stores/configureStore";
import { PersistGate } from "redux-persist/integration/react";
import Spinner from "react-native-loading-spinner-overlay"
import SplashScreen from 'react-native-splash-screen';

import App from "./routers/App";

export default class Root extends Component {
  constructor(props) {
    super(props);
    const { persistor, store } = configureStore();
    this.persistor = persistor;
    this.store = store;
  }

  componentDidMount(){
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={this.store}>
        <PersistGate loading={<Spinner />} persistor={this.persistor}>
          <StatusBar hidden={false} backgroundColor='#d13139' />
          <App />
        </PersistGate>
      </Provider>
    );
  }
};


// global.XMLHttpRequest = global.originalXMLHttpRequest ?
//   global.originalXMLHttpRequest :
//   global.XMLHttpRequest;
// global.FormData = global.originalFormData ?
//   global.originalFormData :
//   global.FormData;

// fetch; // Ensure to get the lazy property

// if (window.__FETCH_SUPPORT__) { // it's RNDebugger only to have
//   window.__FETCH_SUPPORT__.blob = false;
// } else {
//   global.Blob = global.originalBlob ?
//     global.originalBlob :
//     global.Blob;
//   global.FileReader = global.originalFileReader ?
//     global.originalFileReader :
//     global.FileReader;
// }
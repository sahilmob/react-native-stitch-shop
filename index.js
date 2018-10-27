import React from "react";
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import storeConfig from './src/store/storeConfig'
import App from './App';
import { name as appName } from './app.json';


const store = storeConfig();

const AppContainer = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent(appName, () => AppContainer);

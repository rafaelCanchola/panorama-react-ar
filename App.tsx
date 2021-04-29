import React from 'react';
import {Component} from "react";
import {Provider} from "react-redux";
import {ModalPortal} from 'react-native-modals';
import SwitchNavigator from './navigation/Navigator';
import store from './redux/store';

export default class App extends Component {
      render() {
      return (
          <Provider store={store}>
              <SwitchNavigator />
              <ModalPortal/>
          </Provider>
      );
    }
}

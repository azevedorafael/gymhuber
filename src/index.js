import React, { Component } from 'react';
import AsyncStorage from "@react-native-community/async-storage";

import './config/ReactotronConfig';
import './config/DevToolsConfig';

import createNavigator from "./routes";

export default class App extends Component {
  state = {
    userChecked: false,
    userLogged: false
  };

  async componentDidMount() {
    const userName = await AsyncStorage.getItem('@Gymhuber:userName');

    this.setState({
      userChecked: true,
      userLogged: !!userName,
    });
  }

  render() {
    const { userChecked, userLogged } = this.state;

    if (!userChecked) {
      return null;
    }

    const Routes = createNavigator(userLogged);

    return <Routes />;
  }
}

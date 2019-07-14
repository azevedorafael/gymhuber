import React, { Component } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar
} from 'react-native';

import styles from './styles';

import api from '~/services/api';
import AsyncStorage from "@react-native-community/async-storage";

export default class Welcome extends Component {
  state = {
    userName: "",
  };

  checkUserExists = async userName => {
    const user = await api.get(`/users/${userName}`);

    return user;
  };

  saveUser = async userName => {
    await AsyncStorage.setItem('@Gymhuber', userName);
  };

  signIn = async () => {
    const { userName } = this.state;
    const { navigation } = this.props;

    try {
      await this.checkUserExists(userName);
      await this.saveUser(userName);

      navigation.navigate('Repositories');
    } catch (err) {
      console.tron.log("User not found!");
    }
  };

  render() {
    const { userName } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.text}>Find users from Github by name</Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="type here"
            underlineColorAndroid="transparent"
            value={userName}
            onChangeText={text => this.setState({ userName: text })}
          />

          <TouchableOpacity style={styles.button} onPress={this.signIn}>
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

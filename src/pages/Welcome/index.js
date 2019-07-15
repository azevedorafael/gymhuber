import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator
} from "react-native";

import styles from "./styles";

import api from "~/services/api";
import AsyncStorage from '@react-native-community/async-storage';

export default class Welcome extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired
  };

  state = {
    userName: '',
    loading: false,
    error: false
  };

  checkUserExists = async userName => {
    const user = await api.get(`/users/${userName}`);

    return user;
  };

  saveUser = async userName => {
    await AsyncStorage.setItem("@Gymhuber:userName", userName);
  };

  signIn = async () => {
    const { userName } = this.state;
    const { navigation } = this.props;

    this.setState({ loading: true });

    try {
      await this.checkUserExists(userName);
      await this.saveUser(userName);

      navigation.navigate("Repositories");
    } catch (err) {
      this.setState({ loading: false, error: true });

      console.tron.log('User not found!');
    }
  };

  render() {
    const { userName, loading, error } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.text}>Find users from Github by name</Text>

        {error && <Text style={styles.error}>User not found</Text>}

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

          <TouchableOpacity
            style={styles.button}
            onPress={this.signIn}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator size="small" color="#FFF" />
            ) : (
              <Text style={styles.buttonText}>Search</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

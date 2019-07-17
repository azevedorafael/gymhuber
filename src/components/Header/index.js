import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import PropTypes from "prop-types";

import AsyncStorage from "@react-native-community/async-storage";

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    }).isRequired,
  };

  signOut = async () => {
    const { navigation } = this.props;

    await AsyncStorage.clear();

    navigation.navigate("Welcome");
  };

  back = () => {
    const { navigation } = this.props;

    navigation.navigate('Welcome');
  };

  render() {
    const { title } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />

        <View>
          <TouchableOpacity onPress={this.back}>
            <Icon name="arrow-left" size={24} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={this.signOut}>
          <Icon name="exchange" size={24} style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(Header);

import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';

import Header from "~/components/Header";
import api from "~/services/api";
import styles from "./styles";

AsyncStorage.clear();

export default class Repositories extends Component {
  state = {
    data: [],
    loading: true
  };

  async componentDidMount() {
    const userName = await AsyncStorage.getItem('@Gymhuber:userName');
    const { data } = await api.get(`/users/${userName}/repos`);

    this.setState({ data, loading: false });
  }

  renderList = () => this.state.data.map(repo => <Text>{repo.name}</Text>);

  render() {
    const { loading } = this.state ;

    return (
      <View>
        <Header title="Repositories" />
        {loading ? (
          <ActivityIndicator style={styles.loading} />
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}

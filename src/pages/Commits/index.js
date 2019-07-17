import React, { Component } from 'react';

import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { withNavigation } from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

import CommitItem from "./CommitItem";
import styles from './styles';
import api from "~/services/api";

class Commits extends Component {
  state = {
    data: [],
    loading: true
  };

  async componentDidMount() {
    const { navigation } = this.props;
    const repoName = navigation.getParam("name", '');
    const userName = await AsyncStorage.getItem('@Gymhuber:userName');
    const { data } = await api.get(`repos/${userName}/${repoName}/commits`);

    this.setState({ data: data.slice(0, 19), loading: false });
  }

  back = () => {
    const { navigation } = this.props;

    navigation.navigate('Repositories');
  };

  renderList = () => {
    const { data } = this.state;

    return (
      <>
        <TouchableOpacity onPress={this.back}>
          <Icon name="arrow-left" size={24} style={styles.icon} />
        </TouchableOpacity>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <CommitItem commit={item} />}
        />
      </>
    );
  };

  render() {
    const { loading } = this.state;

    return (
      <View>
        {loading ? (
          <ActivityIndicator style={styles.loading} />
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}

export default withNavigation(Commits);

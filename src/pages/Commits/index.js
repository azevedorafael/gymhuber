import React, { Component } from 'react';

import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { withNavigation } from "react-navigation";

import AsyncStorage from '@react-native-community/async-storage';

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

    this.setState({ data, loading: false });
  }

  render() {
    const { loading, data } = this.state;

    return (
      <View>
        {loading ? (
          <ActivityIndicator style={styles.loading} />
        ) : (
          <FlatList
            data={data}
            keyExtractor={item => String(item.id)}
            renderItem={() =>
              data.map(item => <Text>{item.commit.message}</Text>)
            }
          />
        )}
      </View>
    );
  }
}

export default withNavigation(Commits);

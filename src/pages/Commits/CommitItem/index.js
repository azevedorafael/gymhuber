import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from "./styles";

const CommitItem = ({ commit, navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{commit.commit.message}</Text>
  </View>
);

CommitItem.propTypes = {
  repository: PropTypes.shape({
    full_name: PropTypes.string,
    stargazers_count: PropTypes.number,
    forks_count: PropTypes.number,
    watchers_count: PropTypes.number,
  }).isRequired,
};

export default withNavigation(CommitItem);

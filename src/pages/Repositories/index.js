import React from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";

import Header from '~/components/Header';

AsyncStorage.clear();

const Repositories = () => (
  <View>
    <Header title="Repositories" />
  </View>
);

export default Repositories;

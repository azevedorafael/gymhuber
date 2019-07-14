import React from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";

AsyncStorage.clear();

const Repositories = () => (
  <View>
    <Text>Repos</Text>
  </View>
);

export default Repositories;

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import './config/ReactotronConfig';
import './config/DevToolsConfig';

console.tron.log('Remove it');

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Hello boilerplate</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default App;

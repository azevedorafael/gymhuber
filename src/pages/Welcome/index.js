import React from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import styles from "./styles";

const Welcome = () => (
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
      />

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default Welcome;

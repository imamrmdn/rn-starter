import React from "react";
import { Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return <Text style={styles.text}>Hi There! Im Imam Ramadhan</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    textAlign: 'center'
  }
});

export default HomeScreen;

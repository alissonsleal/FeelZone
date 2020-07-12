import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <Text>About</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});

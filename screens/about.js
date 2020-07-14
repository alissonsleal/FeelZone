import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function About({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text>About</Text>
      <Button title="fuc go bac" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

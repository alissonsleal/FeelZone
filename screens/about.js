import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function About({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Button
        title="fuc go bac"
        onPress={() => navigation.navigate("Home")}
        color="#2cb67d"
      />
    </View>
  );
}

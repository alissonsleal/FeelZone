import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";
import { BaseRouter } from "@react-navigation/native";

export default function ReviewDetails({ route, navigation }) {
  const { title, body, rating } = route.params;

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>{title}</Text>
      <Text>{body}</Text>
      <Text>{rating} / 5</Text>
      <Button title="Go back" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

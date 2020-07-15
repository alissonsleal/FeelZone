import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";

export default function ReviewDetails({ route, navigation }) {
  const { title, body, rating } = route.params;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{title}</Text>
        <Text style={globalStyles.paragraph}>{body}</Text>
        <Text style={styles.rating}>{rating} / 5</Text>
        <Button
          title="Go back"
          onPress={() => navigation.navigate("Home")}
          color="#2cb67d"
          style={{ width: 50 }}
        />
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  rating: {
    color: "#2cb67d",
    paddingBottom: 20,
  },
});

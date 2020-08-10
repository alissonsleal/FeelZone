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
        <Text style={[globalStyles.paragraph, styles.spaceCard]}>{body}</Text>
        {/* ****** Code for a "Rating of the day/vent" ********
        <View>
          <Text style={styles.ratingText}>Rating: {rating} / 5</Text>
        </View>
        */}
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
  spaceCard: {
    paddingBottom: 20,
  },

  /*  ******** Code for a "Rating of the day/vent" ********
  ratingText: {
    color: globalStyles.light.color,
    paddingVertical: 20,
    fontSize: 16,
    letterSpacing: 1,
  },
  */
});

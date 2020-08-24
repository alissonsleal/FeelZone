import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import { globalStyles } from "../styles/global";

import splash from "../assets/splash.png";

export default function About({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={[globalStyles.paragraph, styles.aboutTextFirst]}>
        Vent your frustrations here
      </Text>
      <Text style={[globalStyles.paragraph, styles.aboutText]}>
        All submissions are anonymous and get deleted everyday at midnight.
      </Text>
      <Text style={[globalStyles.paragraph, styles.aboutText]}>
        Share your long-standing baggage, happy thoughts or recent trauma,
        posting here may provide some relief.
      </Text>
      <Text style={[globalStyles.paragraph, styles.aboutText]}>
        Or you can just lurk here, and hear other people's stories. Either way,
        you are always welcome here.
      </Text>
      <Button
        title="Go Back"
        onPress={() => navigation.navigate("Home")}
        color={globalStyles.green.color}
      />
      <Image source={splash} style={styles.splashImg} />
    </View>
  );
}
styles = StyleSheet.create({
  aboutText: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    fontSize: 16,
  },
  aboutTextFirst: {
    paddingTop: 10,
    paddingHorizontal: 20,
    fontSize: 16,
  },
  splashImg: {
    height: 250,
    width: 250,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 5,
  },
});

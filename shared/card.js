import React from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native";

export default Card = (props) => {
  return (
    <ScrollView>
      <View style={styles.card}>
        <View style={styles.cardContent}>{props.children}</View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    elevation: 1,
    borderRadius: 6,
    backgroundColor: "#7f5af0",
    shadowColor: "#333",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    marginHorizontal: 20,
    marginVertical: 6,
  },
  cardContent: {
    color: "#fffffe",
    marginHorizontal: 36,
    marginVertical: 20,
  },
});

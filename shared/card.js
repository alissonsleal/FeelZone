import React from "react";
import { StyleSheet, View } from "react-native";

export default Card = (props) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    elevation: 3,
    borderRadius: 6,
    backgroundColor: "#7f5af0",
    shadowColor: "#333",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    marginHorizontal: 10,
    marginVertical: 6,
  },
  cardContent: {
    color: "#fffffe",
    marginHorizontal: 16,
    marginVertical: 20,
  },
});

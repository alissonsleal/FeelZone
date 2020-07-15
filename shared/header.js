import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

export default Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    //width: "100%",
    //height: "100%",
    //backgroundColor: "#FFF",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
    letterSpacing: 1,
  },
});

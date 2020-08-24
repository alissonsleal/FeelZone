import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

import About from "../screens/about";
import Header from "../shared/header";

const Stack = createStackNavigator();

export default function aboutNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="About"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#7f5af0",
        },
        headerTintColor: "#16161a",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="About"
        component={About}
        options={({ navigation }) => ({
          headerLeft: () => (
            <MaterialIcons
              name="menu"
              size={30}
              navigation={{ navigation }}
              onPress={navigation.openDrawer}
              style={styles.icon}
            />
          ),
          headerTitle: () => (
            <Header navigation={navigation} title="About FeelZone" />
          ),
        })}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    padding: 20,
    color: "#fffffe",
  },
});

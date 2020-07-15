import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
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
        options={{
          headerTitle: (props) => <Header {...props} />,
        }}
      />
    </Stack.Navigator>
  );
}

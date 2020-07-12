import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: "" }} />
        <Stack.Screen
          name="ReviewDetails"
          component={ReviewDetails}
          options={{ title: "" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

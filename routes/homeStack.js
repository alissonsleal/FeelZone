import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";

const Stack = createStackNavigator();

export default function homeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
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
        name="Home"
        component={Home}
        options={{
          headerTitleAlign: "center",
          headerTitle: (props) => <Header {...props} />,
          headerLeft: () => {
            <Button
              onPress={() => alert("Button Pressed")}
              title="Info"
              color="#FFF"
            />;
          },
          title: "Home",
        }}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{ title: "Details" }}
      />
    </Stack.Navigator>
  );
}

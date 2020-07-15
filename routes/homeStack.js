import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";

const Stack = createStackNavigator();

const openMenu = () => {
  navigation.toggleDrawer();
};

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
        options={({ navigation, routes }) => ({
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
            <Header navigation={navigation} title="Gamezone" />
          ),
        })}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={(navigation) => ({
          headerTitle: () => <Header navigation={navigation} title="Details" />,
        })}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
  },
});

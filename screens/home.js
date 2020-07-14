import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { globalStyles } from "../styles/global";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Home({ route, navigation }) {
  const [review, setReview] = useState([
    { title: "Mario", rating: "5", body: "lorem ipsum", key: "1" },
    {
      title: "Gotta catch Them All(again)",
      rating: "4",
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: "3",
      body: "lorem ipsum",
      key: "3",
    },
  ]);

  console.log(() => navigation.navigate("ReviewDetails"));

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={review}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

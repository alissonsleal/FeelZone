import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ImageBackground,
  Modal,
} from "react-native";
import { globalStyles } from "../styles/global";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import Card from "../shared/card";

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

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={review}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
      <Modal
        visible={modalOpen}
        animationType="slide"
        onRequestClose={() => setModalOpen(false)}
      >
        <MaterialIcons
          name="close"
          size={24}
          onPress={() => setModalOpen(false)}
          style={styles.modalClose}
        />
        <Text>THIS IS A MODEL</Text>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        onPress={() => setModalOpen(true)}
        style={styles.modalToggle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    color: globalStyles.light.color,
  },
  modalClose: {
    color: globalStyles.dark.color,
  },
});

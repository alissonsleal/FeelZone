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
import { color } from "react-native-reanimated";

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
    { title: "Mario", rating: "5", body: "lorem ipsum", key: "4" },
    {
      title: "Gotta catch Them All(again)",
      rating: "4",
      body: "lorem ipsum",
      key: "5",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: "3",
      body: "lorem ipsum",
      key: "6",
    },
    { title: "Mario", rating: "5", body: "lorem ipsum", key: "7" },
    {
      title: "Gotta catch Them All(again)",
      rating: "4",
      body: "lorem ipsum",
      key: "8",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: "3",
      body: "lorem ipsum",
      key: "9",
    },
    { title: "Mario", rating: "5", body: "lorem ipsum", key: "10" },
    {
      title: "Gotta catch Them All(again)",
      rating: "4",
      body: "lorem ipsum",
      key: "11",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: "3",
      body: "lorem ipsum",
      key: "12",
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <View style={styles.modalContent}>
          <MaterialIcons
            name="close"
            size={24}
            onPress={() => setModalOpen(false)}
            style={{ ...styles.modalToggle, ...styles.modalClose }}
          />
          <Card>
            <Text style={styles.modalContentText}>THIS IS A MODEL</Text>
          </Card>
        </View>
      </Modal>

      <MaterialIcons
        name="add"
        size={30}
        onPress={() => setModalOpen(true)}
        style={styles.modalToggle}
      />
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
    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    color: globalStyles.light.color,
    marginBottom: 10,
    padding: 10,
    borderRadius: 35,
    flex: 0,
    alignSelf: "center",

    backgroundColor: globalStyles.purple.color,
  },
  modalHeader: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  modalContent: {
    flex: 1,
    backgroundColor: globalStyles.dark.color,
  },
  modalContentText: {
    color: globalStyles.light.color,
    fontSize: 20,
  },
  modalClose: {
    marginTop: 16,
  },
});

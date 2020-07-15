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
      <TouchableOpacity style={styles.bgButton}>
        <MaterialIcons
          name="add"
          size={30}
          onPress={() => setModalOpen(true)}
          style={styles.modalToggle}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    elevation: 3,
    color: globalStyles.light.color,
    marginBottom: 20,
    marginRight: 20,
    padding: 20,
    borderRadius: 35,
    alignSelf: "flex-end",
    backgroundColor: globalStyles.purple.color,
  },
  modalClose: {
    color: globalStyles.dark.color,
  },
  bgButton: {
    opacity: 0,
  },
});

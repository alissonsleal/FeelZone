import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Modal,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Formik } from "formik";
import { globalStyles } from "../styles/global";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import Card from "../shared/card";
import ReviewForm from "./reviewForm";
import { add } from "react-native-reanimated";

export default function Home({ route, navigation }) {
  const [reviews, setReview] = useState([
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

  const addReview = (review) => {
    let randomKey =
      review.title +
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);

    review.key = randomKey;
    //review.key = Math.random.toString();
    setReview((currentReviews) => {
      return [review, ...currentReviews];
    });
    setModalOpen(false);
    console.log(reviews);
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              onPress={() => setModalOpen(false)}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
            />
            <ReviewForm addReview={addReview} reviews={reviews} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons
        name="add"
        size={30}
        onPress={() => setModalOpen(true)}
        style={styles.modalToggle}
      />
      <FlatList
        data={reviews}
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

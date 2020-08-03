import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  RefreshControl,
} from "react-native";
import api from "../services/api";
import { globalStyles } from "../styles/global";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import Card from "../shared/card";
import ReviewForm from "./reviewForm";
import Constants from "expo-constants";

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

export default function Home({ route, navigation }) {
  const [reviews, setReview] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    async function loadContent() {
      const response = await api.get("/texts");
      const { docs } = response.data;
      console.log(docs);
      setReview(docs);
    }

    loadContent();
  }, []);

  async function addReview(review) {
    let response = await api.post("/texts", review);
    let randomKey =
      review.title +
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);

    review._id = randomKey;
    setReview((currentReviews) => {
      return [review, ...currentReviews];
    });
    setModalOpen(false);
    console.log(response.data);
  }

  //refreshing doesn't work properly
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(1000).then(() => setRefreshing(false));

    async function loadContent() {
      const response = await api.get("/texts");
      const { docs } = response.data;
      console.log(docs);
      setReview(docs);
    }
    loadContent();
  }, []);

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
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            progressViewOffset={-50}
            progressBackgroundColor={globalStyles.light.color}
          />
        }
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

import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import Card from "../shared/card";
import { TouchableOpacity } from "react-native-gesture-handler";

export default ReviewForm = (props) => {
  return (
    <View styles={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleSubmit, handleChange, values }) => (
          <Card>
            <View>
              <TextInput
                style={styles.modalContentText}
                placeholder="Title"
                onChangeText={handleChange("title")}
                value={values.title}
                underlineColorAndroid={globalStyles.light.color}
                fontSize={16}
                padding={10}
              />
              <TextInput
                multiline
                style={styles.modalContentText}
                placeholder="Description"
                onChangeText={handleChange("body")}
                value={values.body}
                underlineColorAndroid={globalStyles.light.color}
                padding={10}
                fontSize={16}
              />
              <TextInput
                style={styles.modalContentText}
                placeholder="Rating (1 - 5)"
                onChangeText={handleChange("rating")}
                value={values.rating}
                keyboardType="number-pad"
                underlineColorAndroid={globalStyles.light.color}
                padding={10}
                fontSize={16}
              />
              <Button
                title="Submit"
                color={globalStyles.green.color}
                onPress={handleSubmit}
              />
            </View>
          </Card>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContentText: {
    color: "#FFF",
  },
});

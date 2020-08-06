import axios from "../services/api";
import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import Card from "../shared/card";
import * as yup from "yup";

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test("numIs1-5", "Rating must be a number between 1 and 5", (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

export default ReviewForm = ({ addReview }) => {
  return (
    <View styles={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
        }}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          touched,
          errors,
          handleBlur,
        }) => (
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
                onBlur={handleBlur("title")}
                placeholderTextColor="#ccc"
              />
              <Text style={styles.errorText}>
                {touched.title && errors.title}
              </Text>
              <TextInput
                multiline
                style={styles.modalContentText}
                placeholder="Description"
                onChangeText={handleChange("body")}
                value={values.body}
                underlineColorAndroid={globalStyles.light.color}
                padding={10}
                fontSize={16}
                onBlur={handleBlur("body")}
                placeholderTextColor="#ccc"
              />
              <Text style={styles.errorText}>
                {touched.body && errors.body}
              </Text>

              <TextInput
                style={styles.modalContentText}
                placeholder="Rating (1 - 5)"
                onChangeText={handleChange("rating")}
                value={values.rating}
                keyboardType="number-pad"
                underlineColorAndroid={globalStyles.light.color}
                padding={10}
                fontSize={16}
                onBlur={handleBlur("rating")}
                placeholderTextColor="#ccc"
              />
              <Text style={styles.errorText}>
                {touched.rating && errors.rating}
              </Text>
              <View style={styles.paddingButton}>
                <Button
                  title="Submit"
                  color={globalStyles.green.color}
                  onPress={handleSubmit}
                />
              </View>
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
  errorText: {
    color: globalStyles.green.color,
    paddingHorizontal: 5,
  },
  paddingButton: {
    paddingTop: 20,
  },
});

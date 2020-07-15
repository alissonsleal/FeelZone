import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 0,
    backgroundColor: "#16161a",
  },
  titleText: {
    fontFamily: "nunito-bold",
    fontSize: 18,
    color: "#fffffe",
    fontWeight: "bold",
    letterSpacing: 1,
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
    color: "#fffffe",
  },
  purple: {
    color: "#7f5af0",
    backgroundColor: "#7f5af0",
  },
  dark: {
    color: "#16161a",
    backgroundColor: "#16161a",
  },
  light: {
    color: "#fffffe",
    backgroundColor: "#fffffe",
  },
  green: {
    color: "#2cb67d",
    backgroundColor: "#2cb67d",
  },
});

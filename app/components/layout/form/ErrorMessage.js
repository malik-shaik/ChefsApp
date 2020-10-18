import React from "react";
import { StyleSheet, Text } from "react-native";
import colors from "../../../config/colors";

const ErrorMessage = ({ error, visible }) => {
  return !error || !visible ? null : <Text style={styles.error}>{error}</Text>;
};

export default ErrorMessage;

const styles = StyleSheet.create({
  error: {
    color: colors.danger
  }
});

import React from "react";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";

const Icon = ({ icon, color, size }) => {
  return (
    <MaterialCommunityIcons
      name={icon}
      size={size}
      color={color}
      style={styles.icon}
    />
  );
};

export default Icon;

const styles = StyleSheet.create({
  icon: {
    // marginTop: 10,
    // marginBottom: 5
  }
});

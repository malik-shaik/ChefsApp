import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";

const AppTextInput = ({ icon, ...otherProps }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput style={defaultStyles.text} {...otherProps} />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    borderColor: defaultStyles.colors.primary,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 6,
    flexDirection: "row",
    width: "100%",
    padding: 10,
    marginVertical: 10
  },
  icon: {
    marginRight: 10
  }
});

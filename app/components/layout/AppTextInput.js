import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import defaultStyles from "../../config/styles";
import Icon from "../layout/Icon";

const AppTextInput = ({ icon, ...otherProps }) => {
  return (
    <View style={styles.container}>
      {icon && <Icon icon={icon} color="medium" />}
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
  }
});

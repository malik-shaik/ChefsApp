import React from "react";
import { StyleSheet, Image } from "react-native";

const Logo = () => (
  <Image style={styles.logo} source={require("../assets/logo.png")} />
);

export default Logo;

const styles = StyleSheet.create({
  logo: {
    height: 70,
    resizeMode: "contain",
    marginTop: 50,
    marginBottom: 20,
    alignSelf: "center"
  }
});

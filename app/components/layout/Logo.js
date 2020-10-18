import React from "react";
import { StyleSheet, Image } from "react-native";
import logoImage from "../../assets/logo.png";

const Logo = () => <Image style={styles.logo} source={logoImage} />;

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

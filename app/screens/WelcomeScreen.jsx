import React from "react";
import { StyleSheet, Image, SafeAreaView } from "react-native";
import { Logo } from "../components";

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <Image source={require("./../assets/welcome.png")} />
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

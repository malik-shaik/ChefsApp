import React from "react";
import { Text, StyleSheet, View } from "react-native";
import * as Yup from "yup";
import { AppForm, AppFormField, SubmitButton } from "../components/form";
import { FacebookLogin, Logo, Screen } from "../components";
import colors from "../config/colors";
import userApi from "../api/userAPI";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required(" * Please enter email address")
    .email()
    .label("Email"),
  password: Yup.string()
    .required(" * Please enter password")
    .min(4)
    .label("Password")
});

const LoginScreen = () => {
  const hadleSubmit = (data) => userApi.login(data);

  return (
    <Screen style={styles.container}>
      <Logo />

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={hadleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCurrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email address"
          textContentType="emailAddress"
        />

        <AppFormField
          autoCapitalize="none"
          autoCurrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry={true}
          textContentType="password"
        />

        <SubmitButton title="Log ind" />
      </AppForm>

      <View style={styles.horizontalLine}>
        <View style={styles.hairline} />
        <Text style={styles.text}>eller</Text>
        <View style={styles.hairline} />
      </View>

      <FacebookLogin />
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: { padding: 30 },
  horizontalLine: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 10
  },
  hairline: {
    backgroundColor: colors.light,
    height: 1.4,
    width: 135
  },

  text: {
    fontSize: 15,
    // paddingHorizontal: 5,
    alignSelf: "center",
    color: "#A2A2A2"
  }
});

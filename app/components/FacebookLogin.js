import React from "react";
import AppButton from "./AppButton";
import signInWithFacebook from "../api/facebook";

const FacebookLogin = () => (
  <AppButton
    icon="facebook"
    color="facebookblue"
    title="Log ind med Facebook"
    onPress={signInWithFacebook}
  />
);

export default FacebookLogin;

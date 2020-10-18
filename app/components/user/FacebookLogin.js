import React from "react";
import { facebookAPI as signInWithFacebook } from "../../api";
import { AppButton } from "../layout";

const FacebookLogin = () => (
  <AppButton
    icon="facebook"
    color="facebookblue"
    title="Log ind med Facebook"
    onPress={signInWithFacebook}
  />
);

export default FacebookLogin;

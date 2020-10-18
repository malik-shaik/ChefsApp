import React from "react";
import signInWithFacebook from "../../api/facebookAPI";
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

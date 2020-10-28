import Constants from 'expo-constants';
import * as Facebook from 'expo-facebook';
import { Alert } from 'react-native';
import userApi from './userAPI';

const signInWithFacebook = async () => {
  const permissions = ['public_profile', 'email'];
  await Facebook.initializeAsync(Constants.manifest.extra.facbookOptions);
  const { type, token } = await Facebook.logInWithReadPermissionsAsync({
    permissions
  });
  console.log('type: ', type);
  if (type == 'success') {
    // console.log("TOKEN: ", token);
    const response = await fetch(
      `https://graph.facebook.com/me?fields=token_for_business,email&access_token=${token}`
    );
    let res = await response.json();
    userApi.login({ token, id: res.id });
    // Alert.alert("Logged in!", `Hi ${res.name}!`);
    console.log(res);
  }
};

export default signInWithFacebook;

import React, { useContext } from 'react';
import { Text, StyleSheet, View, Alert } from 'react-native';
import { AppForm, AppFormField, SubmitButton } from '../components/layout/form';
import { Logo, Screen } from '../components/layout';
import { FacebookLogin } from '../components/user';
import colors from '../config/colors';
import { AuthContext } from '../context/auth/authContext';
import { validationSchemas } from '../utils';

const LoginScreen = () => {
  const { loginAction, error } = useContext(AuthContext);

  if (error) Alert.alert('Log in Error', error, [{ text: 'OK' }]);

  return (
    <Screen style={styles.container}>
      <Logo />
      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={(data) => loginAction(data)}
        validationSchema={validationSchemas.loginValidationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCurrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="E-mail"
          textContentType="emailAddress"
          extraStyles={styles.formfield}
        />

        <AppFormField
          autoCapitalize="none"
          autoCurrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry={true}
          textContentType="password"
          extraStyles={styles.formfield}
        />

        <SubmitButton title="Log ind" />
      </AppForm>

      {/* FIX: Extract the following code and make a React component */}
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
  container: { padding: 20 },
  horizontalLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10
  },
  hairline: {
    backgroundColor: colors.light,
    height: 1.4,
    width: '30%'
  },

  text: {
    fontSize: 14,
    // paddingHorizontal: 5,
    alignSelf: 'center',
    color: '#A2A2A2'
  },
  formfield: {
    borderColor: colors.primary,
    // backgroundColor: defaultStyles.colors.lighter,
    borderStyle: 'solid',
    borderWidth: 1
  }
});

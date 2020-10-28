import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Screen from '../components/layout/Screen';
import { AuthContext } from '../context/auth/authContext';

const ProfileScreen = () => {
  const { logout } = useContext(AuthContext);
  return (
    <Screen>
      <Button
        onPress={logout}
        title="Logout"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </Screen>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});

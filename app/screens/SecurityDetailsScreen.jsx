import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SecurityDetailsScreen = ({ route }) => {
  const email = route.params.data;

  return (
    <View>
      <Text>SECURITY DETAILS : {email}</Text>
    </View>
  );
};

export default SecurityDetailsScreen;

const styles = StyleSheet.create({});

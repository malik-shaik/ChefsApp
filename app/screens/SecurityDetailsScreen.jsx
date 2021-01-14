import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UnderConstruction from '../components/layout/UnderConstruction';

const SecurityDetailsScreen = ({ route }) => {
  const email = route.params.data;

  return (
    <View>
      {/* <Text>SECURITY DETAILS : {email}</Text> */}
      <UnderConstruction />
    </View>
  );
};

export default SecurityDetailsScreen;

const styles = StyleSheet.create({});

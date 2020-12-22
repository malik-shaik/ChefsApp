import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PersonalDetailsScreen = ({ route }) => {
  const { firstname } = route.params.data;

  return (
    <View>
      <Text> PERSON DETAILS SCREEN : {firstname} </Text>
    </View>
  );
};

export default PersonalDetailsScreen;

const styles = StyleSheet.create({});

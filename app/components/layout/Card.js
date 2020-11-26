import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../../config/colors';

const Card = ({ extraStyles, children }) => {
  return <View style={[styles.card, extraStyles]}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    padding: 10,
    height: 120,
    width: '90%',
    marginTop: 20,
    borderRadius: 10,
    // backgroundColor: colors.lightGreen,
    // backgroundColor: 'gray',
    alignSelf: 'center'
  }
});

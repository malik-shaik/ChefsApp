import React from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import Card from '../layout/Card';
import colors from '../../config/colors';

const Order = () => {
  return (
    <Card extraStyles={styles.order}>
        {/* <Image style={styles.image} source={image} />

      <Text style={styles.name}>Malik</Text> */}
    </Card>
  );
};

export default Order;

const styles = StyleSheet.create({
  order: {
    borderLeftWidth: 10,
    borderLeftColor: colors.acceptedColor
  },
  name: {
    fontSize: 20,
    fontWeight: '700'
  },
  image:{
      height:50,

  }
});

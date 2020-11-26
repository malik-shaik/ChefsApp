import React, { useEffect } from 'react';
import { StyleSheet, Text, Image, View, Dimensions } from 'react-native';
import Card from '../layout/Card';
import avatar from '../../assets/avatar.png';
import Icon from '../layout/Icon';
import colors from '../../config/colors';
import icons from '../../config/icons';

const window = Dimensions.get('window');
// TODO: refactor this with styles

const Order = ({ order }) => {
  console.log('IN ORDER COMP :', order);

  return (
    <Card>
      <Text>{order.token}</Text>
      <Text>{order.customer_firstname}</Text>
    </Card>
  );
};

export default Order;

const styles = StyleSheet.create({
  order: {
    width: window.width * 0.95,
    backgroundColor: 'white',
    borderLeftWidth: 8,
    // borderLeftColor: orderColor,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
    elevation: 4
  },
  avatar: {
    height: 60,
    width: 60,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 10
  },
  nameContainer: {
    marginTop: 20,
    // backgroundColor: 'blue',
    height: '100%'
    // marginRight: 60
    // paddingRight: 20
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.medium
  },
  name: {
    fontSize: 18,
    fontWeight: '700'
  },

  statusContainer: {
    flex: 1,
    alignItems: 'flex-end',
    // backgroundColor: 'blue',
    height: 60,
    paddingTop: 20
    // paddingLeft: 40,
    // paddingLeft: 40
  },
  detailsContainer: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    marginTop: 50,
    marginLeft: 20
  }
});

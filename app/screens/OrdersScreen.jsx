import React, { useContext, useEffect } from 'react';
import { Button, StyleSheet, Text } from 'react-native';
import Screen from '../components/layout/Screen';
import { AuthContext } from '../context/auth/authContext';
import Order from '../components/orders/Order';

const OrdersScreen = ({ navigation }) => {
  const { user, loadUser } = useContext(AuthContext);

  // TODO: implement load orders ..
  // useEffect(() => {

  // }, []);

  return (
    <Screen>
      <Text>{user.firstname}</Text>
      <Order></Order>
      <Button title="view order" onPress={() => navigation.navigate('OrderDetails')} />
    </Screen>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({});

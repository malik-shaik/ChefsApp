import React, { useContext, useEffect } from 'react';
import { Button, StyleSheet, Text } from 'react-native';
import Screen from '../components/layout/Screen';
import { AuthContext } from '../context/auth/authContext';
import { OrdersContext } from '../context/orders/ordersContext';
import Order from '../components/orders/Order';

const OrdersScreen = ({ navigation }) => {
  const { allOrders, loadAllOrdersAction } = useContext(OrdersContext);

  // TODO: implement load orders ..
  useEffect(() => {
    const getAllOrders = async () => await loadAllOrdersAction();
    getAllOrders();
  }, []);

  return (
    <Screen>
      <Order></Order>
      <Button title="view order" onPress={() => navigation.navigate('OrderDetails')} />
    </Screen>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({});

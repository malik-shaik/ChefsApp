import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';
import Screen from '../components/layout/Screen';
import { OrdersContext } from '../context/orders/ordersContext';
import Order from '../components/orders/Order';

const OrdersScreen = ({ navigation }) => {
  const { allOrders, loadAllOrdersAction } = useContext(OrdersContext);

  // TODO: implement loading icon ..

  useEffect(() => {
    loadAllOrdersAction(); //eslint-disable-next-line
  }, []);

  return (
    <Screen>
      {allOrders !== undefined ? (
        <FlatList
          data={allOrders}
          renderItem={({ item }) => <Order order={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text>Loading...</Text>
      )}
    </Screen>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({});

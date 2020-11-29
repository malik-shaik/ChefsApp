import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';
import Screen from '../components/layout/Screen';
import { OrdersContext } from '../context/orders/ordersContext';
import Order from '../components/orders/Order';

const OrdersScreen = ({ route }) => {
  const type = route.params.type;
  const { confirmedOrders, loadAllOrdersAction } = useContext(OrdersContext);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const getOrders = async () => {
      const loaded = await loadAllOrdersAction(type); //eslint-disable-next-line
      loaded && setIsReady(true);
    };

    getOrders();
  }, []);

  return (
    <Screen>
      {isReady && confirmedOrders !== undefined ? (
        <FlatList
          data={confirmedOrders}
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

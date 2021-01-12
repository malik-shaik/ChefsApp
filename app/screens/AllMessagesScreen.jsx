import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import Screen from '../components/layout/Screen';
import { OrdersContext } from '../context/orders/ordersContext';
import Order from '../components/orders/Order';
import Loader from '../components/layout/Loader';
import Message from '../components/messages/Message';

const AllMessagesScreen = ({ route }) => {
  const type = route.params.type;
  const { allOrders, loadAllOrdersAction } = useContext(OrdersContext);
  const [isReady, setIsReady] = useState(false);

  // TODO: implement loading icon ..

  useEffect(() => {
    const getOrders = async () => {
      const loaded = await loadAllOrdersAction(type); //eslint-disable-next-line
      loaded && setIsReady(true);
    };
    getOrders();
  }, []);

  return (
    <Screen>
      {isReady && allOrders !== undefined ? (
        <FlatList
          data={allOrders}
          // renderItem={({ item }) => <Order order={item} />}
          renderItem={({ item }) => <Message order={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Loader />
      )}
    </Screen>
  );
};

export default AllMessagesScreen;

const styles = StyleSheet.create({});

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OrdersScreen from '../../../screens/OrdersScreen';
import OrderDetailsScreen from '../../../screens/OrderDetailsScreen';

const Stack = createStackNavigator();

const OrdersStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
      screenOptions={{ cardStyle: { backgroundColor: 'white' } }}
    >
      <Stack.Screen
        name="Orders"
        component={OrdersScreen}
        // options={{ cardStyle: { backgroundColor: 'white' } }}
      />
      <Stack.Screen name="OrderDetails" component={OrderDetailsScreen} />
    </Stack.Navigator>
  );
};

export default OrdersStackNavigator;

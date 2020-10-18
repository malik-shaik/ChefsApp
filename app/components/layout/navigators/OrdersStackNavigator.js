import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OrdersScreen from "../../../screens/OrdersScreen";
import OrderDetailsScreen from "../../../screens/OrderDetailsScreen";

const Stack = createStackNavigator();

const OrdersStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Orders">
      <Stack.Screen name="Orders" component={OrdersScreen} />
      <Stack.Screen name="OrderDetails" component={OrderDetailsScreen} />
    </Stack.Navigator>
  );
};

export default OrdersStackNavigator;

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MenusScreen from "../../../screens/MenusScreen";
import colors from "../../../config/colors";
import Icon from "../Icon";
import OrdersStackNavigator from "./OrdersStackNavigator";

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.primary
      }}
    >
      <Tab.Screen
        name="Orders"
        component={OrdersStackNavigator}
        options={{
          tabBarIcon: ({ size }) => (
            <Icon icon="inbox" size={size} color="primary" />
          ),
          tabBarBadge: 1
        }}
      />
      <Tab.Screen name="Menus" component={MenusScreen} />
    </Tab.Navigator>
  );
};

export default TabsNavigator;

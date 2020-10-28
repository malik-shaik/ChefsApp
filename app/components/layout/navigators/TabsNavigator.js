import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MenusScreen from '../../../screens/MenusScreen';
import colors from '../../../config/colors';
import Icon from '../Icon';
import OrdersStackNavigator from './OrdersStackNavigator';
import ProfileScreen from '../../../screens/ProfileScreen';

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
          tabBarIcon: ({ size, color }) => <Icon icon="inbox" size={size} color={color} />,
          tabBarBadge: 1
        }}
      />
      <Tab.Screen name="Menus" component={MenusScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabsNavigator;

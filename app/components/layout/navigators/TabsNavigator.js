import React from 'react';
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MenusScreen from '../../../screens/MenusScreen';
import WalletScreen from '../../../screens/WalletScreen';
import colors from '../../../config/colors';
import Icon from '../Icon';
import OrdersStackNavigator from './OrdersStackNavigator';
import ProfileScreen from '../../../screens/ProfileScreen';
import { color } from 'react-native-reanimated';

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.inactivePrimary
      }}
      >
      <Tab.Screen
        name="Messages"
        component={OrdersStackNavigator}
        options={{
          tabBarIcon: ({ size, color }) => <Icon icon="inbox" size={size} color={color} />,
          tabBarBadge: 1
        }}
      />
      <Tab.Screen 
        name="Menu" 
        component={MenusScreen} 
        options={{
            tabBarIcon: ({ size, color }) => <Icon icon="silverware-fork-knife" size={size} color={color} />,
        }}
      />
      <Tab.Screen 
        name="Wallet" 
        component={WalletScreen}
        options={{
          tabBarIcon: ({ size, color }) => <Icon icon="wallet" size={size} color={color} />,
          }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ size, color }) => <Icon icon="account-circle-outline" size={size} color={color} />,
        }} 
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;

const styles = StyleSheet.create({
  navigator: {
    marginBottom: 5
  }
});
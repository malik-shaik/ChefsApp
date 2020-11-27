import React from 'react';
import { StyleSheet } from 'react-native';
import { OrdersStackNavigator, BottomTabsNavigator } from '../components/layout/navigators';

const DashboardScreen = () => {
  return (
    <BottomTabsNavigator />
    //   <OrdersStackNavigator />
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({});

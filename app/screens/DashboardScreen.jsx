import React from "react";
import { StyleSheet } from "react-native";
import {
  OrdersStackNavigator,
  TabsNavigator
} from "../components/layout/navigators";

const DashboardScreen = () => {
  return (
    <TabsNavigator />
    //   <OrdersStackNavigator />
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({});

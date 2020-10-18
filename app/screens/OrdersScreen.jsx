import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Screen from "../components/layout/Screen";

const OrdersScreen = ({ navigation }) => {
  return (
    <Screen>
      <Text>Orders</Text>
      <Button
        title="view order"
        onPress={() => navigation.navigate("OrderDetails")}
      />
    </Screen>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({});

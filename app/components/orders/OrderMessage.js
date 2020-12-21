import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const orderMessage = ({ message, customer }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Message from {customer}</Text>
      <Text style={styles.messages}>{message}</Text>
    </View>
  );
};

export default orderMessage;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 30
  },
  header: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 5
  },
  messages: {}
});

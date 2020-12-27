import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import AppScreens from './app/screens/AppScreens';
import { AuthProvider } from './app/context/auth/authContext';
import { OrdersProvider } from './app/context/orders/ordersContext';
import { NotificationProvider } from './app/context/notifications/notificationContext';
import PushNotifications from './app/components/PushNotifications';

const App = () => {
  return (
    <NotificationProvider>
      <AuthProvider>
        <OrdersProvider>
          {/* <PushNotifications /> */}
          <AppScreens />
        </OrdersProvider>
      </AuthProvider>
    </NotificationProvider>
  );
};

export default App;

const styles = StyleSheet.create({});

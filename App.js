import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { AppLoading } from 'expo';
import AppScreens from './app/screens/AppScreens';
import { AuthProvider } from './app/context/auth/authContext';
import { OrdersProvider } from './app/context/orders/ordersContext';
import { getToken } from './app/context/tokenStorage';
import { NotificationProvider } from './app/context/notifications/notificationContext';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { setNotifications, registerNotifications } from './app/Notifications';
import PushNotifications from './app/components/PushNotifications';

const App = () => {
  const [isAppReady, setIsAppReady] = useState(false);

  const wait = () => {
    setTimeout(() => {
      // console.log('APP IS READY...');
    }, 3000);
  };

  return (
    <>
      {!isAppReady ? (
        <AppLoading startAsync={wait} onFinish={() => setIsAppReady(true)} onError={console.warn} />
      ) : (
        <NotificationProvider>
          <AuthProvider>
            <OrdersProvider>
              {/* <PushNotifications /> */}
              <AppScreens />
            </OrdersProvider>
          </AuthProvider>
        </NotificationProvider>
      )}
    </>
  );
};

export default App;

const styles = StyleSheet.create({});

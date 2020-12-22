import React, { useState, useEffect, useRef } from 'react';
import { AppLoading } from 'expo';
import AppScreens from './app/screens/AppScreens';
import { AuthProvider } from './app/context/auth/authContext';
import { OrdersProvider } from './app/context/orders/ordersContext';
import { getToken } from './app/context/tokenStorage';
import { NotificationProvider } from './app/context/notifications/notificationContext';
import Constants from 'expo-constants';
// import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import { setNotifications, registerNotifications } from './app/Notifications';
import PushNotifications from './app/components/PushNotifications';

// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: true,
//     shouldSetBadge: true
//   })
// });

const App = () => {
  const [isAppReady, setIsAppReady] = useState(false);
  // const [expoPushToken, setExpoPushToken] = useState('');
  // const [notification, setNotification] = useState(false);
  // const notificationListener = useRef();
  // const responseListener = useRef();

  // useEffect(() => {
  //   // registerForPushNotificationsAsync().then((token) => {
  //   registerNotifications().then((token) => {
  //     console.log('TOKEN :', token);
  //     setExpoPushToken(token);
  //   });

  //   // This listener is fired whenever a notification is received while the app is OPEN or foregrounded
  //   notificationListener.current = Notifications.addNotificationReceivedListener((notification) => {
  //     console.log('APP IS FOREGROUND (OPEN) AND RECIVED NOTIFICATION');
  //     setNotification(notification);
  //   });

  //   // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
  //   responseListener.current = Notifications.addNotificationResponseReceivedListener((response) => {
  //     console.log('RESPONSE :', response);
  //   });

  //   return () => {
  //     Notifications.removeNotificationSubscription(notificationListener);
  //     Notifications.removeNotificationSubscription(responseListener);
  //   };
  // }, []);

  const wait = () => {
    setTimeout(() => {
      // console.log('APP IS READY...');
    }, 3000);
  };

  // return isLoading ? <WelcomeScreen /> : <LoginScreen />;
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

  return (
    <AuthProvider>
      <OrdersProvider>
        <AppScreens />
      </OrdersProvider>
    </AuthProvider>
  );
};

export default App;

import React, { useState, useEffect, useRef, useContext } from 'react';
import * as Notifications from 'expo-notifications';
import { setNotifications, registerNotifications } from '../Notifications';
import { NotificationContext } from '../context/notifications/notificationContext';
import { OrdersContext } from '../context/orders/ordersContext';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true
  })
});

const PushNotifications = () => {
  const { setBadgeNumberAction } = useContext(NotificationContext);
  const { loadAllOrdersAction } = useContext(OrdersContext);
  // const [expoPushToken, setExpoPushToken] = useState('');
  // const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerNotifications().then((token) => {
      console.log('TOKEN :', token);
    });

    // This listener is fired whenever a notification is received while the app is OPEN or foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener(
      async (notification) => {
        console.log('APP IS FOREGROUND (OPEN) AND RECIVED NOTIFICATION');
        // console.log('BADGE : ', notification.request.content.badge);
        // setNotification(notification);
        // await setBadgeNumberAction(notification.request.content.badge);
        await setBadgeNumberAction(1);
        await loadAllOrdersAction('all');
      }
    );

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener((response) => {
      console.log('RESPONSE :', response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);

  return <></>;
};

export default PushNotifications;

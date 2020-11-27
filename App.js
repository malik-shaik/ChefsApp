import React, { useState, useEffect } from 'react';
import { AppLoading } from 'expo';
import AppScreens from './app/screens/AppScreens';
import { AuthProvider } from './app/context/auth/authContext';
import { OrdersProvider } from './app/context/orders/ordersContext';

import { getToken } from './app/context/tokenStorage';
import { NotificationProvider } from './app/context/notifications/notificationContext';

const App = () => {
  const [isAppReady, setIsAppReady] = useState(false);

  const wait = () => {
    setTimeout(() => {
      console.log('APP IS READY...');
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

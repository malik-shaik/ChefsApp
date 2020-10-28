import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './LoginScreen';
import { AuthContext } from '../context/auth/authContext';
import DashboardScreen from './DashboardScreen';
import { getToken } from '../context/tokenStorage';

const AppScreens = () => {
  const { isAuthenticated, loadUser } = useContext(AuthContext);

  useEffect(() => {
    console.log('is auth:', isAuthenticated);
    const restoreUser = async () => {
      const token = await getToken();
      if (token) await loadUser();
    };
    restoreUser();
  }, [isAuthenticated]);

  return (
    <>
      {isAuthenticated ? (
        <NavigationContainer>
          <DashboardScreen />
        </NavigationContainer>
      ) : (
        <LoginScreen />
      )}
    </>
  );
};

export default AppScreens;

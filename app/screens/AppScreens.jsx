import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './LoginScreen';
import { AuthContext } from '../context/authContext';
import DashboardScreen from './DashboardScreen';

const AppScreens = () => {
  const { isAuthenticated } = useContext(AuthContext);
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

import React, { useState } from 'react';
import AppScreens from './app/screens/AppScreens';
import { AuthProvider } from './app/context/auth/authContext';

const App = () => {
  // const [isLoading, setIsLoading] = useState(true);

  // return isLoading ? <WelcomeScreen /> : <LoginScreen />;
  return (
    <AuthProvider>
      <AppScreens />
    </AuthProvider>
  );
};

export default App;

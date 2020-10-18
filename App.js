import React, { useEffect, useState } from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import DashboardScreen from "./app/screens/DashboardScreen";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return isLoading ? <WelcomeScreen /> : <LoginScreen />;
  return (
    <NavigationContainer>
      <DashboardScreen />
    </NavigationContainer>
  );
}

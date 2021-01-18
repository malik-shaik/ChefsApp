import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from '../../screens/AccountScreen';
import PersonalDetailsScreen from '../../screens/PersonalDetailsScreen';
import SecurityDetailsScreen from '../../screens/SecurityDetailsScreen';
import colors from '../../config/colors';

const Stack = createStackNavigator();

const ProfileScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={AccountScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="Personal details"
        component={PersonalDetailsScreen}
        options={({ route }) => ({
          // title: `Order: ${route.params.order.token}`,
          headerBackTitleVisible: false,
          headerTitle: false,
          headerTintColor: colors.primary,
          cardStyle: { backgroundColor: 'white' }
        })}
      />
      <Stack.Screen
        name="Security"
        component={SecurityDetailsScreen}
        options={({ route }) => ({
          headerBackTitleVisible: false,
          cardStyle: { backgroundColor: 'white' }
        })}
      />
    </Stack.Navigator>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../../screens/ProfileScreen';
import PersonalDetailsScreen from '../../screens/PersonalDetailsScreen';
import SecurityDetailsScreen from '../../screens/SecurityDetailsScreen';
import colors from '../../config/colors';

const Stack = createStackNavigator();

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
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

export default ProfileStackNavigator;

const styles = StyleSheet.create({});

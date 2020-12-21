import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import TopTabsNavigator from '../components/layout/navigators/TopTabsNavigator';
import OrderDetailsScreen from './OrderDetailsScreen';
import colors from '../config/colors';

const Stack = createStackNavigator();

const MessagesScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Messages"
        component={TopTabsNavigator}
        initialParams={{ type: 'all' }}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Order details"
        component={OrderDetailsScreen}
        options={({ route }) => ({
          title: `Order: ${route.params.order.token}`,
          headerBackTitleVisible: false,
          headerTintColor: colors.primary,
          cardStyle: { backgroundColor: 'white' }
        })}
      />
    </Stack.Navigator>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});

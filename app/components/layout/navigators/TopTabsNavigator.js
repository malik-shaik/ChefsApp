import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import colors from '../../../config/colors';
import Screen from '../Screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import OrdersScreen from '../../../screens/OrdersScreen';
import OrdersScreen1 from '../../../screens/OrdersScreen1';
import ConfirmedMessagesScreen from '../../../screens/ConfirmedMessagesScreen';
import UnreadMessagesScreen from '../../../screens/UnreadMessagesScreen';

const Tab = createMaterialTopTabNavigator();

const TopTabsNavigator = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: colors.primary,
          inactiveTintColor: colors.medium,
          indicatorStyle: { backgroundColor: colors.primary },
          labelStyle: {
            fontSize: 12,
            fontWeight: '700',
            textTransform: 'none',
            width: 100
          }
          // tabStyle: { width: 100 }
        }}
        sceneContainerStyle={{
          backgroundColor: 'white'
        }}
      >
        <Tab.Screen name="All" component={OrdersScreen} initialParams={{ type: 'all' }} />
        <Tab.Screen
          name="Pending"
          component={OrdersScreen1}
          initialParams={{ type: 'requested' }}
        />
        <Tab.Screen
          name="Unread"
          component={UnreadMessagesScreen}
          initialParams={{ type: 'unread' }}
        />
        <Tab.Screen
          name="Confirmed"
          component={ConfirmedMessagesScreen}
          initialParams={{ type: 'confirmed' }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default TopTabsNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

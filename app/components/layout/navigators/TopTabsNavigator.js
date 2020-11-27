import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import colors from '../../../config/colors';
import Screen from '../Screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import OrdersScreen from '../../../screens/OrdersScreen';

const Tab = createMaterialTopTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

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
            width: 100
          }
          // tabStyle: { width: 100 }
        }}
        sceneContainerStyle={{
          backgroundColor: 'white'
        }}
      >
        {/* <Tab.Screen name="All" component={() => renderComponent(OrdersScreen, 'all')} /> */}
        {/* <Tab.Screen name="All" component={() => <OrdersScreen type="all" />} /> */}
        <Tab.Screen name="All" component={OrdersScreen} initialParams={{ type: 'all' }} />
        <Tab.Screen name="Unread" component={OrdersScreen} initialParams={{ type: 'all' }} />
        <Tab.Screen name="Pending" component={OrdersScreen} initialParams={{ type: 'Pending' }} />
        <Tab.Screen
          name="Confirmed"
          component={OrdersScreen}
          initialParams={{ type: 'Confirmed' }}
        />
        {/* <Tab.Screen name="Unread" component={SettingsScreen} />
        <Tab.Screen name="Pending" component={SettingsScreen} />
        <Tab.Screen name="Confirmed" component={SettingsScreen} /> */}
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

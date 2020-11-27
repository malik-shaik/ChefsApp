import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MenusScreen from '../../../screens/MenusScreen';
import WalletScreen from '../../../screens/WalletScreen';
import colors from '../../../config/colors';
import Icon from '../Icon';
import OrdersStackNavigator from './OrdersStackNavigator';
import ProfileScreen from '../../../screens/ProfileScreen';
import icons from '../../../config/icons';
import { NotificationContext } from '../../../context/notifications/notificationContext';
import TopTabsNavigator from './TopTabsNavigator';

const Tab = createMaterialBottomTabNavigator();
// const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  const { menus, messages, profile, wallet } = icons;
  const size = 26;

  const { badgeNumber } = useContext(NotificationContext);

  console.log('Badge number:  ', badgeNumber);

  return (
    <Tab.Navigator
      // tabBarOptions={{
      //   activeTintColor: colors.primary,
      //   inactiveTintColor: colors.inactivePrimary,
      // }}

      initialRouteName="Messages"
      activeColor={colors.primary}
      inactiveColor={colors.inactivePrimary}
      barStyle={{ backgroundColor: 'white' }}
    >
      <Tab.Screen
        name="Messages"
        component={TopTabsNavigator}
        // component={OrdersStackNavigator}
        options={{
          tabBarIcon: ({ color }) => <Icon icon={messages} size={size} color={color} />,
          tabBarBadge: badgeNumber > 0 ? badgeNumber : null
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenusScreen}
        options={{
          tabBarIcon: ({ color }) => <Icon icon={menus} size={size} color={color} />
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          tabBarIcon: ({ color }) => <Icon icon={wallet} size={size} color={color} />
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => <Icon icon={profile} size={size} color={color} />
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;

const styles = StyleSheet.create({
  navigator: {
    marginBottom: 5
  }
});

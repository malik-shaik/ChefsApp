import React, { useContext } from 'react';
import * as Notifications from 'expo-notifications';

import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MenusScreen from '../../../screens/MenusScreen';
import WalletScreen from '../../../screens/WalletScreen';
import colors from '../../../config/colors';
import Icon from '../Icon';
import icons from '../../../config/icons';
import { NotificationContext } from '../../../context/notifications/notificationContext';
import MessagesScreen from '../../../screens/MessagesScreen';
import ProfileScreen from '../../user/ProfileScreen';

const Tab = createMaterialBottomTabNavigator();

const BottomTabsNavigator = () => {
  const { menus, messages, profile, wallet } = icons;
  const size = 26;

  const { badgeNumber, setBadgeNumberAction } = useContext(NotificationContext);

  console.log('Badge number:  ', badgeNumber);

  return (
    <Tab.Navigator
      initialRouteName="Messages"
      activeColor={colors.primary}
      inactiveColor={colors.inactivePrimary}
      barStyle={{ backgroundColor: 'white' }}
    >
      <Tab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          tabBarIcon: ({ color }) => <Icon icon={messages} size={size} color={color} />,
          tabBarBadge: badgeNumber > 0 ? badgeNumber : null
        }}
        listeners={{
          tabPress: async (e) => {
            console.log('Foo tab bar button pressed');
            await setBadgeNumberAction(0);
            await Notifications.setBadgeCountAsync(0);
          }
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

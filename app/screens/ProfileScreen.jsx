import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Screen from '../components/layout/Screen';
import { AuthContext } from '../context/auth/authContext';
import ProfileImage from '../components/user/ProfileImage';
import PersonalDetailsScreen from './PersonalDetailsScreen';
import { useNavigation } from '@react-navigation/native';

import HorizontalLine from '../components/layout/HorizontalLine';
import ProfileDetails from '../components/user/ProfileDetails';
import icons from '../config/icons';
import colors from '../config/colors';

const ProfileScreen = () => {
  const { user, logoutAction } = useContext(AuthContext);

  const navigation = useNavigation();

  return (
    <Screen>
      <ProfileImage
        userImage={user.image_custom || user.image_default}
        userFullName={`${user.firstname} ${user.lastname}`}
      />

      <ProfileDetails
        icon={icons.user}
        text="Personal Details"
        data={user}
        redirectTo="Personal details"
      />
      <ProfileDetails icon={icons.lock} text="Security" data={user.email} redirectTo="Security" />

      <ProfileDetails
        icon={icons.logout}
        iconColor={colors.rejected}
        text="Logout"
        extraStyles={styles.logout}
      />

      {/* <Button
        onPress={logoutAction}
        title="Logout"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      /> */}
    </Screen>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  logout: {
    color: colors.rejected,
    fontWeight: '500'
  }
});

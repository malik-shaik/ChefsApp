import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from '../layout/Icon';
import icons from '../../config/icons';
import colors from '../../config/colors';
import { AuthContext } from '../../context/auth/authContext';

const ProfileDetails = ({ icon, iconColor, data, redirectTo, text, extraStyles }) => {
  const navigation = useNavigation();
  const { logoutAction } = useContext(AuthContext);

  const goToDetailsScreen = () => {
    if (text === 'Logout') logoutAction();
    else navigation.navigate(redirectTo, { data });
  };

  return (
    <TouchableOpacity onPress={goToDetailsScreen}>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={styles.iconContainer}>
            <Icon icon={icon} size={30} color={iconColor || colors.medium} />
          </View>
          <Text style={[styles.text, extraStyles]}>{text}</Text>
        </View>
        {!extraStyles && <Icon icon={icons.rightArrow} size={40} color={colors.medium} />}
      </View>
    </TouchableOpacity>
  );
};

export default ProfileDetails;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
    width: '80%',
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomColor: 'rgba(204, 204, 204, 0.5)',
    borderBottomWidth: 1
  },

  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: colors.light,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginRight: 20
  },

  text: {
    fontSize: 17
  }
});

import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../../config/colors';
import Icon from './Icon';

const AppButton = ({ title, onPress, color = 'primary', icon, extraStyles, titleStyles }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }, extraStyles]}
      onPress={onPress}
    >
      {icon && <Icon icon={icon} size={20} color="white" />}
      <Text style={[styles.text, titleStyles]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    // width: '100%',
    marginVertical: 10,
    flexDirection: 'row',
    textAlignVertical: 'center'
  },
  text: {
    color: colors.white,
    fontSize: 15
  }
});

import React from 'react';
import { StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../config/colors';

const Icon = ({ icon, color, size, extraStyles }) => {
  return (
    <MaterialCommunityIcons
      name={icon}
      size={size}
      color={color}
      style={[styles.icon, extraStyles]}
    />
  );
};

export default Icon;

const styles = StyleSheet.create({
  icon: {
    // margin: 5
    // marginBottom: 5
  }
});

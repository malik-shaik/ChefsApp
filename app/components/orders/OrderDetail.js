import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from '../layout/Icon';
import colors from '../../config/colors';

const OrderDetail = ({ icon, header, details, iconStyles }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon icon={icon} color={iconStyles.color} size={iconStyles.size} />
      </View>

      <View style={{ marginLeft: 20, borderLeftWidth: 0.5, borderLeftColor: colors.medium }}>
        <Text style={styles.header}>{header}</Text>
        <Text style={styles.details}>{details}</Text>
      </View>
    </View>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  iconContainer: {
    height: 50,
    width: 50,
    // backgroundColor: colors.inactivePrimary,
    backgroundColor: 'rgba(0, 132, 137, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
    // justifyContent: 'center'
    // marginLeft: 40
  },
  header: {
    fontSize: 11,
    fontWeight: '400',
    color: colors.medium,
    marginLeft: 20
  },
  details: {
    fontSize: 14,
    fontWeight: '600',
    // color: 'black',
    marginLeft: 20
  }
});

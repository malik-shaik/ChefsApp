import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import Card from '../layout/Card';
import colors from '../../config/colors';
import avatar from "../../assets/avatar.png";
import Icon from '../layout/Icon';


const Order = (icon) => {
  return (
    <Card extraStyles={styles.order}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Image style={styles.avatar} source={avatar} />
        <View style={styles.nameContainer}>
          <Text style={styles.subtitle}>From</Text>
          <Text style={styles.name}>Alex Marchal</Text>
        </View>
        <View style={styles.statusContainer}>
          <Text style={styles.subtitle}>Order: XPLK</Text>
          {icon && <Icon icon='close-circle-outline' color={colors.declined} size={35} />}
        </View>
      </View>
        <View style={styles.detailsContainer}>
          {icon && <Icon icon='calendar' color={colors.medium} size={20} />}
          <Text style={styles.subtitle}>21 October</Text>

          {icon && <Icon icon='clock-outline' color={colors.medium} size={20} />}
          <Text style={styles.subtitle}>20:30</Text>

          {icon && <Icon icon='account-multiple' color={colors.medium} size={20} />}
          <Text style={styles.subtitle}>2</Text>

          {icon && <Icon icon='map-marker-outline' color={colors.medium} size={20} />}
          <Text style={styles.subtitle}>Valby</Text>
        </View>
    </Card>
  );
};

export default Order;

const styles = StyleSheet.create({
  order: {
    backgroundColor: "white",
    borderLeftWidth: 8,
    borderLeftColor: colors.declined,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
    elevation: 4,
  },
  avatar:{
      height:60,
      width: 60,
      marginTop:15,
      marginLeft:15,
      marginRight:10,
  },
  nameContainer: {
    marginTop: 20,
    // marginRight: 60
    // paddingRight: 20
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.medium,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
  },

  statusContainer: {
    paddingTop: 20,
    paddingLeft: 40
  },
  detailsContainer: {
    flex: 1, 
    flexDirection: 'row',
    justifyContent:'space-around',
    marginTop: 50,
    marginLeft: 20
  }
});

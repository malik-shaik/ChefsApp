import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, Image, View, Dimensions, TouchableOpacity } from 'react-native';
import Card from '../layout/Card';
import Icon from '../layout/Icon';
import colors from '../../config/colors';
import icons from '../../config/icons';
import { OrdersContext } from '../../context/orders/ordersContext';
import { getImageSrc } from '../../utils/helpers';

const window = Dimensions.get('window');
// TODO: refactor this with all the styles

const Order = ({ order }) => {
  const imageName = order.customer_image || order.customer_image_default;
  const imageSrc = getImageSrc(imageName);
  // const imageSrc = `https://res.cloudinary.com/hcogndlqd/image/upload/uploads/${imageName}`;

  const { setOneOrderAction } = useContext(OrdersContext);
  const navigation = useNavigation();

  const getOrderHanler = async () => {
    // await setOneOrderAction(order.token);
    // console.log('TOKEN : ', order.token);
    navigation.navigate('Order details', { order });
    // navigation.navigate('Order details', { orderToken: order.token });
  };

  return (
    <TouchableOpacity onPress={getOrderHanler}>
      <Card extraStyles={[{ borderLeftColor: colors[order.order_status] }, styles.order]}>
        <View style={{ flex: 1, flexDirection: 'row', height: 120 }}>
          <Image style={styles.avatar} source={{ uri: imageSrc }} />
          <View style={styles.nameContainer}>
            <Text style={styles.subtitle}>From</Text>
            <Text style={styles.name}>
              {order.customer_firstname} {order.customer_lastname}
            </Text>
          </View>
          <View style={styles.statusContainer}>
            <Text style={styles.subtitle}>Order: {order.token}</Text>
            <Icon icon={icons[order.order_status]} color={colors[order.order_status]} size={35} />
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              width: window.width * 0.3,
              marginRight: 10
            }}
          >
            <Icon icon="calendar" color={colors.medium} size={20} />
            <Text style={styles.subtitle}>{order.order_date}</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', width: '5%' }}>
            <Icon icon="clock-outline" color={colors.medium} size={20} />
            <Text style={styles.subtitle}>{order.order_dinner_time}</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Icon icon="account-multiple" color={colors.medium} size={20} />
            <Text style={styles.subtitle}>{order.order_people_num}</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Icon icon="map-marker-outline" color={colors.medium} size={20} />
            <Text style={styles.subtitle}>{order.order_customer_city}</Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default Order;

const styles = StyleSheet.create({
  order: {
    width: window.width * 0.95,
    backgroundColor: 'white',
    borderLeftWidth: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
    elevation: 4
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 50,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 10
  },
  nameContainer: {
    marginTop: 20,
    // backgroundColor: 'blue',
    height: '100%'
    // marginRight: 60
    // paddingRight: 20
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.medium
  },
  name: {
    fontSize: 18,
    fontWeight: '700'
  },

  statusContainer: {
    flex: 1,
    alignItems: 'flex-end',
    // backgroundColor: 'blue',
    height: 60,
    paddingTop: 20
    // paddingLeft: 40,
    // paddingLeft: 40
  },
  detailsContainer: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    marginTop: 50,
    marginLeft: 20
  }
});

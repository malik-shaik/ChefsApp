import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import moment from 'moment';
import Screen from '../components/layout/Screen';
import { OrdersContext } from '../context/orders/ordersContext';
import Loader from '../components/layout/Loader';
import { getImageSrc } from '../utils/helpers';
import colors from '../config/colors';
import Icon from '../components/layout/Icon';
import OrderDetail from '../components/orders/OrderDetail';
import icons from '../config/icons';
import { getDateInfo } from '../utils/helpers';
import OrderMessage from '../components/orders/OrderMessage';
import AppButton from '../components/layout/AppButton';
import Modal from '../components/Modal';

const window = Dimensions.get('window');

const { calendar, clock, guests, location } = icons;

const OrderDetailsScreen = ({ route }) => {
  const { acceptOrderAction, loadOneOrderAction, oneOrder: order } = useContext(OrdersContext);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    // const loadOrder = async () => {
    //   await loadOneOrderAction(route.params.order.token);
    // };
    // loadOrder();
    loadOneOrderAction(route.params.order.token);
  }, []);

  // const order = route.params.order;
  if (order) {
    const imageName = order.image_custom || order.image_default;
    // const imageName = order.customer_image || order.customer_image_default;
    // const imageSrc = getImageSrc(imageName);
    setImageSrc(getImageSrc(imageName));
  }

  const [modalVisible, setModalVisible] = useState(false);
  const [responseMessage, setResponseMessage] = useState(undefined);

  // console.log('ORDER :', order);
  // console.log('ORDER IMAGE:', order.image_custom);

  const closeModal = (close) => close && setModalVisible(false);

  const handleOrder = async (type) => {
    const response = await acceptOrderAction(order.token, type);
    setResponseMessage(response);
  };

  return (
    <Screen>
      {order ? (
        <>
          <Modal
            modalVisible={modalVisible}
            closeModal={closeModal}
            handleOrder={handleOrder}
            responseMessage={responseMessage}
          />

          <View style={styles.container}>
            <View style={{ flexDirection: 'row', marginBottom: 30, marginTop: 12 }}>
              <Image style={styles.avatar} source={{ uri: imageSrc }} />
              <View style={styles.nameContainer}>
                <Text style={styles.subtitle}>From</Text>
                <Text style={styles.name}>
                  {order.customer_firstname} {order.customer_lastname}
                </Text>
              </View>
            </View>

            <OrderDetail
              icon={calendar}
              header="Date"
              details={getDateInfo(order.order_date)}
              iconStyles={{ size: 30, color: colors.medium }}
            />
            <OrderDetail
              icon={clock}
              header="Time"
              details={order.order_dinner_time}
              iconStyles={{ size: 30, color: colors.medium }}
            />
            <OrderDetail
              icon={location}
              header="Address"
              details={`${order.order_customer_street}, ${order.order_customer_postal} ${order.order_customer_city}`}
              iconStyles={{ size: 30, color: colors.medium }}
            />
            <OrderDetail
              icon={guests}
              header="Guests"
              details={order.order_people_num}
              iconStyles={{ size: 30, color: colors.medium }}
            />

            {order.last_message && (
              <OrderMessage message={order.last_message} customer={order.customer_firstname} />
            )}
            {order.order_status === 'requested' ? (
              <View style={styles.buttons}>
                <AppButton
                  title="Accept"
                  extraStyles={[styles.button, { backgroundColor: colors.primary }]}
                  onPress={() => setModalVisible(true)}
                />
                <AppButton
                  title="Reject"
                  extraStyles={[styles.button, { backgroundColor: colors.rejected }]}
                  onPress={() => setModalVisible(true)}
                />
              </View>
            ) : (
              <View style={styles.buttons}>
                <AppButton
                  title="Edit"
                  extraStyles={[styles.button, { backgroundColor: colors.requested }]}
                  onPress={() => setModalVisible(true)}
                />
                <AppButton
                  title="Cancel"
                  extraStyles={[styles.button, { backgroundColor: colors.rejected }]}
                  onPress={() => setModalVisible(true)}
                />
              </View>
            )}
          </View>
        </>
      ) : (
        <Loader />
      )}
    </Screen>
  );
};

export default OrderDetailsScreen;

const styles = StyleSheet.create({
  container: {
    width: window.width * 0.85,
    alignSelf: 'center'
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 50,
    marginTop: 15,
    marginRight: 15
  },
  nameContainer: {
    marginTop: 35,
    height: '100%'
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.medium
  },
  name: {
    fontSize: 28,
    fontWeight: '700'
  },
  buttons: {
    flexDirection: 'row'
  },
  button: {
    width: '45%',
    margin: 10
  }
});

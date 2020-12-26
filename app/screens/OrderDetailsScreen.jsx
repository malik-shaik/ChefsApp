import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import Screen from '../components/layout/Screen';
import { OrdersContext } from '../context/orders/ordersContext';
import Loader from '../components/layout/Loader';
import { getImageSrc } from '../utils/helpers';
import colors from '../config/colors';
import OrderDetail from '../components/orders/OrderDetail';
import icons from '../config/icons';
import { getDateInfo } from '../utils/helpers';
import OrderMessage from '../components/orders/OrderMessage';
import AppButton from '../components/layout/AppButton';
import Modal from '../components/Modal';

const window = Dimensions.get('window');

const { calendar, clock, guests, location, money } = icons;

const OrderDetailsScreen = ({ route }) => {
  const { token: orderToken } = route.params.order;
  const { respondOrderAction, loadOneOrderAction, oneOrder: order } = useContext(OrdersContext);
  const [imageSrc, setImageSrc] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [responseMessage, setResponseMessage] = useState(undefined);
  const [orderAction, setOrderAction] = useState(undefined);

  useEffect(() => {
    const loadOrder = async () => {
      const orderLoaded = await loadOneOrderAction(orderToken);
      if (orderLoaded && order) {
        // console.log(order.token, '  ', order.status);
        const imageName = order.image_custom || order.image_default;
        setImageSrc(getImageSrc(imageName));
      }
    };
    loadOrder();
  }, []);

  const closeModal = (close) => close && setModalVisible(false);

  const handleOrder = async (type) => {
    const response = await respondOrderAction(orderToken, type);
    setResponseMessage(response);
  };

  const buttonAction = (type) => {
    setOrderAction(type);
    setModalVisible(true);
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
            orderAction={orderAction}
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
              details={order.dinner_time}
              iconStyles={{ size: 30, color: colors.medium }}
            />
            <OrderDetail
              icon={location}
              header="Address"
              details={`${order.customer_street}, ${order.customer_postal} ${order.customer_city}`}
              iconStyles={{ size: 30, color: colors.medium }}
            />
            <OrderDetail
              icon={guests}
              header="Guests"
              details={order.people_num}
              iconStyles={{ size: 30, color: colors.medium }}
            />
            <OrderDetail
              icon={money}
              header="Budget"
              details={`${order.budget} dkk`}
              iconStyles={{ size: 30, color: colors.medium }}
            />

            {order.customer_message && (
              <OrderMessage message={order.customer_message} customer={order.customer_firstname} />
            )}
            {order.status === 'requested' ? (
              <View style={styles.buttons}>
                <AppButton
                  title="Accept"
                  extraStyles={[styles.button, { backgroundColor: colors.primary }]}
                  onPress={() => buttonAction('accept')}
                />
                <AppButton
                  title="Reject"
                  extraStyles={[styles.button, { backgroundColor: colors.rejected }]}
                  onPress={() => buttonAction('reject')}
                />
              </View>
            ) : (
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.header}>Status:</Text>
                <Text style={[styles.budget, { color: colors[order.status] }]}>{order.status}</Text>
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
  },
  header: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 5
  },
  budget: {
    fontSize: 18,
    fontWeight: '800',
    marginLeft: 10
  }
});

import React from 'react';
import { Alert, Modal, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';
import AppButton from './layout/AppButton';

const OrderModal = ({ modalVisible, closeModal, handleOrder, responseMessage, orderAction }) => {
  console.log(orderAction);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {responseMessage ? (
            <>
              <Text style={styles.modalText}>{responseMessage}</Text>
              <AppButton
                title="Ok"
                onPress={() => closeModal(true)}
                titleStyles={{ color: colors.primary, fontWeight: '600' }}
                extraStyles={{ backgroundColor: 'white' }}
              />
            </>
          ) : (
            <>
              <Text style={styles.modalText}>Do you want to accept this order ?</Text>

              <View style={styles.buttons}>
                <AppButton title={orderAction} onPress={() => handleOrder(orderAction)} />
                <AppButton
                  title="Cancel"
                  onPress={() => closeModal(true)}
                  titleStyles={{ color: colors.primary, fontWeight: '600' }}
                  extraStyles={{ backgroundColor: 'white' }}
                />
              </View>
            </>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default OrderModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
    // marginTop: 22
  },
  modalView: {
    width: '80%',
    // margin: 20,
    // flex: 1,
    // flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%'
  }
});

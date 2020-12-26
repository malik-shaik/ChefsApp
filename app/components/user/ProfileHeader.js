import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from '../layout/Icon';
import Modal from '../Modal';

const ProfileHeader = ({ header, icon, openModal }) => {
  //   const [showModal, setShowModal] = useState(false);

  //   const openModal = () => {};

  return (
    <View style={styles.header}>
      <Text style={styles.text}>{header}</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={openModal}>
          <Icon icon={icon} size={25} color={styles.icon.color} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 10
  },
  text: {
    fontSize: 20,
    fontWeight: '400'
  },
  iconContainer: {
    position: 'absolute',
    right: 10,
    width: 40,
    height: 40,
    backgroundColor: 'rgba(253, 203, 110, 0.5)',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    color: 'rgba(0, 0, 0, 0.54)'
  }
});

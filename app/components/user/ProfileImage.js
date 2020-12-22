import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { getImageSrc } from '../../utils/helpers';

const ProfileImage = ({ userImage, userFullName }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{ uri: getImageSrc(userImage) }} />
      <Text style={styles.name}>{userFullName}</Text>
    </View>
  );
};

export default ProfileImage;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 12
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 50,
    marginTop: 15,
    marginRight: 15
  },
  name: {
    marginTop: 15,
    fontSize: 28,
    fontWeight: '500',
    marginBottom: 25
  }
});

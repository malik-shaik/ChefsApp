import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import notfound from '../../assets/under-construction.png';

const window = Dimensions.get('window');

const UnderConstruction = () => {
  return (
    <View style={{ backgroundColor: 'white' }}>
      <Image style={styles.image} source={notfound} />
    </View>
  );
};

export default UnderConstruction;

const styles = StyleSheet.create({
  image: {
    height: window.height,
    width: window.width,
    resizeMode: 'contain'
  }
});

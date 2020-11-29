import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import defaultStyles from '../../config/styles';
import Icon from '../layout/Icon';
import colors from '../../config/colors';

const AppTextInput = ({ icon, ...otherProps }) => {
  return (
    <View style={styles.container}>
      {icon && <Icon icon={icon} size={20} color={colors.medium} />}
      <TextInput style={[defaultStyles.text, { marginLeft: 2 }]} {...otherProps} />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    borderColor: defaultStyles.colors.primary,
    // backgroundColor: defaultStyles.colors.lighter,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    marginVertical: 10
  }
});

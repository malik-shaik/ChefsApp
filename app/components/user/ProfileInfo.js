import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppFormField from '../layout/form/AppFormField';

const ProfileInfo = ({
  title,
  data,
  editable,
  extraStyles,
  inputValue,
  inputFieldName,
  keyboardType
}) => {
  return (
    <View style={[styles.container, extraStyles]}>
      <Text style={styles.title}>{title}</Text>
      {editable ? (
        <AppFormField
          autoCapitalize="none"
          autoCurrect={false}
          keyboardType={keyboardType || 'default'}
          name={inputFieldName}
          placeholder={data}
          value={inputValue}
          extraStyles={styles.fromfield}
        />
      ) : (
        <Text style={styles.data}>{data}</Text>
      )}
    </View>
  );
};

export default ProfileInfo;

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    width: '80%',
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(204, 204, 204, 0.5)'
  },
  title: {
    color: '#BBBBBB'
  },
  data: {
    color: 'rgba(0, 0, 0, 0.8)',
    fontSize: 16,
    marginTop: 15,
    marginBottom: 12
  },
  fromfield: {
    marginTop: 10,
    fontSize: 46,
    padding: 0,
    marginVertical: 0
  }
});

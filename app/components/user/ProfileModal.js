import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  Text,
  TouchableOpacity,
  Modal
} from 'react-native';
import { Formik } from 'formik';
import Icon from '../layout/Icon';
import icons from '../../config/icons';
import colors from '../../config/colors';
import validationSchemas from '../../utils/validationSchemas';
import ProfileInfo from './ProfileInfo';
import SubmitButton from '../layout/form/SubmitButton';

const ProfileModal = ({
  modalVisible,
  closeModal,
  data,
  responseMessage,
  handleProfileUpdate,
  formType
}) => {
  const { firstname, lastname, email, phone, street, city, postal } = data;

  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.inner}>
          <View style={styles.modalView}>
            <TouchableOpacity style={styles.close} onPress={closeModal}>
              <Icon icon={icons.close} size={30} color={colors.medium} extraStyles={styles.close} />
            </TouchableOpacity>

            {responseMessage ? (
              <Text>{responseMessage}</Text>
            ) : (
              <Formik
                initialValues={{ firstname, lastname, email, phone, street, city, postal }}
                onSubmit={(data) => handleProfileUpdate(data)}
                validationSchema={validationSchemas.profileUpdateValidationSchema}
              >
                {({ values }) => (
                  <>
                    {formType === 'personaldetails' ? (
                      <>
                        <ProfileInfo
                          title="First name"
                          inputFieldName="firstname"
                          data={firstname}
                          editable={true}
                          inputValue={values.firstname}
                        />
                        <ProfileInfo
                          title="Last name"
                          inputFieldName="lastname"
                          data={lastname}
                          editable={true}
                          inputValue={values.lastname}
                        />
                        <ProfileInfo
                          title="Email"
                          inputFieldName="email"
                          data={email}
                          editable={true}
                          inputValue={values.email}
                        />
                        <ProfileInfo
                          title="Phone number"
                          inputFieldName="phone"
                          data={phone}
                          keyboardType="number-pad"
                          editable={true}
                          inputValue={values.phone}
                          extraStyles={{ marginBottom: 20 }}
                        />
                      </>
                    ) : (
                      <>
                        <ProfileInfo
                          title="Street"
                          inputFieldName="street"
                          data={street}
                          editable={true}
                          inputValue={values.street}
                        />
                        <ProfileInfo
                          title="Post number"
                          inputFieldName="postal"
                          data={postal}
                          editable={true}
                          inputValue={values.postal}
                        />
                        <ProfileInfo
                          title="City"
                          inputFieldName="city"
                          data={city}
                          editable={true}
                          inputValue={values.city}
                          extraStyles={{ marginBottom: 20 }}
                        />
                      </>
                    )}

                    <SubmitButton title="Update" />
                  </>
                )}
              </Formik>
            )}
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalView: {
    width: '90%',
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
  close: {
    position: 'absolute',
    top: 10,
    right: 10
  }
});

export default ProfileModal;

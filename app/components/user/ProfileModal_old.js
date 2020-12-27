import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';
import Icon from '../layout/Icon';
import icons from '../../config/icons';
import colors from '../../config/colors';
import AppForm from '../layout/form/AppForm';
import AppFormField from '../layout/form/AppFormField';
import { validationSchemas } from '../../utils';
import ProfileInfo from './ProfileInfo';
import SubmitButton from '../layout/form/SubmitButton';
import { Formik } from 'formik';

const ProfileModal = ({ modalVisible, closeModal, data }) => {
  const { firstname, lastname, email, phone } = data;
  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity style={styles.close} onPress={closeModal}>
            <Icon icon={icons.close} size={30} color={colors.medium} extraStyles={styles.close} />
          </TouchableOpacity>

          {/* <AppForm
            initialValues={{ firstname }}
            onSubmit={(data) => console.log('FORM DATA:', data)}
            validationSchema={validationSchemas.profileUpdateValidationSchema}
          >
            <ProfileInfo
              title="First name"
              data={firstname}
              editable={true}
              inputValue={values.firstname}
            />

            <SubmitButton title="Save" />
        </AppForm> */}

          <Formik
            initialValues={{ firstname, lastname, email, phone }}
            onSubmit={(data) => console.log('FORM DATA:', data)}
            validationSchema={validationSchemas.profileUpdateValidationSchema}
          >
            {({ values }) => (
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
                />

                <SubmitButton title="Save" />
              </>
            )}
          </Formik>
        </View>
      </View>
    </Modal>
  );
};

export default ProfileModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalView: {
    width: '80%',
    // height: '70%',
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
  close: {
    position: 'absolute',
    top: 10,
    right: 10
  }
});

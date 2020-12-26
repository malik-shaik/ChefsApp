import React, { useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import Card from '../components/layout/Card';
import Screen from '../components/layout/Screen';
import icons from '../config/icons';
import ProfileInfo from '../components/user/ProfileInfo';
import ProfileHeader from '../components/user/ProfileHeader';
import ProfileModal from '../components/user/ProfileModal';

const PersonalDetailsScreen = ({ route }) => {
  const { firstname, lastname, email, phone, street, city, postal } = route.params.data;
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    console.log('OPEN MODAL CALL');
    setModalVisible(true);
  };

  return (
    <Screen>
      {/* <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      > */}
      <ProfileModal
        modalVisible={modalVisible}
        closeModal={() => setModalVisible(false)}
        data={{ firstname, lastname, email, phone }}
      />

      <View>
        <Card extraStyles={styles.card}>
          <ProfileHeader header="Personal Details" icon={icons.pencil} openModal={openModal} />
          <ProfileInfo title="Full Name" data={`${firstname} ${lastname}`} />
          <ProfileInfo title="Email address" data={email} />
          <ProfileInfo title="Phone number" data={phone} extraStyles={{ borderBottomWidth: 0 }} />
        </Card>

        <Card extraStyles={styles.card}>
          <ProfileHeader header="Address" icon={icons.pencil} />
          <ProfileInfo title="Street" data={street} />
          <ProfileInfo title="Post number" data={postal} />
          <ProfileInfo title="City" data={city} extraStyles={{ borderBottomWidth: 0 }} />
        </Card>
      </View>
      {/* </KeyboardAvoidingView> */}
    </Screen>
  );
};

export default PersonalDetailsScreen;

const styles = StyleSheet.create({
  // container: { flex: 1 },
  card: {
    width: '100%',
    height: '46%',

    borderColor: 'rgba(204, 204, 204, 0.5)',

    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    marginTop: 25,
    position: 'relative'
  }
});

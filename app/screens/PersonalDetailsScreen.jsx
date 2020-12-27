import React, { useState, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import Card from '../components/layout/Card';
import Screen from '../components/layout/Screen';
import icons from '../config/icons';
import ProfileInfo from '../components/user/ProfileInfo';
import ProfileHeader from '../components/user/ProfileHeader';
import ProfileModal from '../components/user/ProfileModal';
import { AuthContext } from '../context/auth/authContext';

const PersonalDetailsScreen = ({ route }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { user, profileUpdateAction } = useContext(AuthContext);
  const { firstname, lastname, email, phone, street, city, postal } = user;
  const [responseMessage, setResponseMessage] = useState(undefined);
  const [formType, setFormType] = useState('');

  const handleOpenModal = (type) => {
    setFormType(type);
    setModalVisible(true);
  };

  const handleProfileUpdate = async (data) => {
    const res = await profileUpdateAction(data);
    setResponseMessage(res);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setResponseMessage(false);
  };

  return (
    <Screen>
      <ProfileModal
        modalVisible={modalVisible}
        closeModal={handleCloseModal}
        data={{ firstname, lastname, email, phone, city, street, postal }}
        handleProfileUpdate={handleProfileUpdate}
        responseMessage={responseMessage}
        formType={formType}
      />

      <View>
        <Card extraStyles={styles.card}>
          <ProfileHeader
            header="Personal Details"
            icon={icons.pencil}
            openModal={() => handleOpenModal('personaldetails')}
          />
          <ProfileInfo title="Full Name" data={`${firstname} ${lastname}`} />
          <ProfileInfo title="Email address" data={email} />
          <ProfileInfo title="Phone number" data={phone} extraStyles={{ borderBottomWidth: 0 }} />
        </Card>

        <Card extraStyles={styles.card}>
          <ProfileHeader
            header="Address"
            icon={icons.pencil}
            openModal={() => handleOpenModal('address')}
          />
          <ProfileInfo title="Street" data={street} />
          <ProfileInfo title="Post number" data={postal} />
          <ProfileInfo title="City" data={city} extraStyles={{ borderBottomWidth: 0 }} />
        </Card>
      </View>
    </Screen>
  );
};

export default PersonalDetailsScreen;

const styles = StyleSheet.create({
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

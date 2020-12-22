import * as SecureStore from 'expo-secure-store';

const key = 'authToken';

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log('Error storing the auth token', error);
  }
};

const getToken = async () => {
  try {
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI5NzAsImlhdCI6MTYwODY1NjM1MiwiZXhwIjoxNjA5MDE2MzUyfQ.sexnd80z3rfBgZMTOMqsYFo5D-v_E1SzdBZoON-M-uQ';
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log('Error getting the auth token', error);
  }
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log('Error removing the auth token', error);
  }
};

export { getToken, removeToken, storeToken };

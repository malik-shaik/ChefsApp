import api from '../api';
import { getToken } from '../../context/tokenStorage';

const endpoint = '/users';

const login = async (data) => {
  const apiUrl = data.id && data.token ? `${endpoint}/facebookauth` : `${endpoint}/login`;
  return await api.post(apiUrl, data);
};

const loadUser = async (data) => {
  const apiUrl = `${endpoint}/userById`;
  api.setHeaders({ 'auth-token': await getToken() });
  return await api.get(apiUrl, data);
};

const updateProfile = async (data) => {
  const apiUrl = `${endpoint}/profile/edit`;
  api.setHeaders({ 'auth-token': await getToken() });
  return await api.patch(apiUrl, data);
};

export default { login, loadUser, updateProfile };

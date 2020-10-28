import api from '../api';
import { getToken } from '../../context/tokenStorage';

const endpoint = '/orders';

const getAllOrders = async (data) => {
  const apiUrl = `${endpoint}/all`;
  api.setHeaders({ 'auth-token': await getToken() });
  return await api.get(apiUrl, data);
};

const getOneOrder = async (data) => {
  // TODO: implement this
};

export default { getAllOrders, getOneOrder };

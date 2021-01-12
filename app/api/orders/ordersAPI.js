import api from '../api';
import { getToken } from '../../context/tokenStorage';

const getAllOrders = async (type) => {
  const apiUrl = `/messages/${type}`;
  api.setHeaders({ 'auth-token': await getToken() });
  return await api.get(apiUrl);
};

const getOneOrder = async (token) => {
  const apiUrl = `/orders/${token}`;
  api.setHeaders({ 'auth-token': await getToken() });
  return await api.get(apiUrl);
};

const respondOrder = async (orderToken, type) => {
  const data = { orderToken };
  const apiUrl = `/orders/request/${type}`;
  api.setHeaders({ 'auth-token': await getToken() });
  return await api.post(apiUrl, data);
};

export default { getAllOrders, getOneOrder, respondOrder };

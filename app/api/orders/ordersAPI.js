import api from '../api';
import { getToken } from '../../context/tokenStorage';

const endpoint = '/messages';

const getAllOrders = async (data) => {
  const apiUrl = `${endpoint}/all`;
  // api.setHeaders({ 'auth-token': await getToken() });
  api.setHeaders({
    'auth-token':
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI5ODEsImlhdCI6MTYwNjM4NTMzOCwiZXhwIjoxNjA2NzQ1MzM4fQ.KKCpAz1QRJ59NF-_Ed12-dT67Oe5Gzy_ygTjuhTrycw'
  });
  return await api.get(apiUrl);
};

const getOneOrder = async (data) => {
  // TODO: implement this
};

export default { getAllOrders, getOneOrder };

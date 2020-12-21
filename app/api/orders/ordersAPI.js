import api from '../api';
import { getToken } from '../../context/tokenStorage';

const endpoint = '/messages';

const getAllOrders = async (type) => {
  const apiUrl = `${endpoint}/${type}`;
  api.setHeaders({ 'auth-token': await getToken() });
  // api.setHeaders({
  //   'auth-token':
  //     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMyNTUsImlhdCI6MTYwNjczNzgyMCwiZXhwIjoxNjA3MDk3ODIwfQ.4wmwOfiXXHEmu1IJaTINRLui4Bl7XMMc_OgacfjFxhs'
  // });

  const result = await api.get(apiUrl);
  // console.log('API : ', result);
  return result;
};

// FIX: implement messages api

const getOneOrder = async (token) => {
  // TODO: implement this
  // token = 'KDLSH';
  const apiUrl = `/orders/${token}`;
  api.setHeaders({ 'auth-token': await getToken() });

  const result = await api.get(apiUrl);
  // console.log('ONE ORDER : ', result);

  return result;
};

const respondOrder = async (orderToken, type) => {
  const data = { orderToken };
  const apiUrl = `/orders/request/${type}`;
  console.log(apiUrl);
  api.setHeaders({ 'auth-token': await getToken() });
  return await api.post(apiUrl, data);
};

export default { getAllOrders, getOneOrder, respondOrder };

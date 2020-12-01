import { create } from 'apisauce';

const api = create({
  // baseURL: 'http://localhost:5000/',
  // baseURL: 'http://192.168.8.103:5000/',
  // baseURL: 'http://10.69.64.130:5000/',
  baseURL: 'https://chefmenodeserver.herokuapp.com/',
  headers: { 'content-type': 'application/json' }
});

export default api;

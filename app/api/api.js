import { create } from 'apisauce';

const api = create({
  // baseURL: 'http://localhost:5000/',
  // baseURL: 'http://192.168.0.107:5000/',
  // baseURL: 'https://chefmenodeserver.herokuapp.com/',
  baseURL: 'https://polite-grasshopper-18.loca.lt/',
  headers: { 'content-type': 'application/json' }
});

export default api;

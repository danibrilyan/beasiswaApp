import axios from 'axios';
import StaticVar from '../Config/StaticVarNotification';
import AsyncStorage from '@react-native-community/async-storage';
// ===> api create 
const api = axios.create({
  baseURL: StaticVar.Base_Url,
  // timeout: 10000,
  headers:{}
});

// ===> api interceptors 
api.interceptors.request.use(async function (config) {
    // set headers after authentication
    const value = await AsyncStorage.getItem('token');
    config.headers['token'] = value;//localStorage.getItem("token");
    return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// ===> api list function request

const sendwa = (telp, message) => api.get('/sendwa?telp='+telp+'&message='+ message);

export const apis = {
    sendwa,
}

export default apis
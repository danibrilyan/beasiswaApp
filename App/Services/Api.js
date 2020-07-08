import axios from 'axios';
import StaticVar from '../Config/StaticVar';
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

const user_auth = (data) => api.post('/auth/login', data);
const user_register = (data) => api.post('/user/register', data);
const profile_select = () => api.get('/profile');
const profile_register = (data) => api.post('/profile/create', data);
const profile_update = (id, data) => api.put('/profile/'+id, data);
const profile_delete = (_id) => api.delete('/profile/'+_id);
const profile_photo = (data) => api.post('/profile/photo',data);
const profile_upload = (data) => api.post('/profile/upload',data);

const domisili_select = () => api.get('/domisili');
const domisili_register = (data) => api.post('/domisili/create', data);
const domisili_update = (id, data) => api.put('/domisili/'+id, data);
const domisili_delete = (_id) => api.delete('/domisili/'+_id);

const universitas_select = () => api.get('/universitas');
const universitas_register = (data) => api.post('/universitas/create', data);
const universitas_update = (id, data) => api.put('/universitas/'+id, data);
const universitas_delete = (_id) => api.delete('/universitas/'+_id);

const penerimaan_select = () => api.get('/penerimaan');
const penerimaan_register = (data) => api.post('/penerimaan/create', data);
const penerimaan_update = (id, data) => api.put('/penerimaan/'+id, data);
const penerimaan_delete = (_id) => api.delete('/penerimaan/'+_id);

const akademik_select = () => api.get('/akademik');
const akademik_read = (id) => api.get('/akademik/'+id);
const akademik_register = (data) => api.post('/akademik/create', data);
const akademik_update = (id, data) => api.put('/akademik/'+id, data);
const akademik_delete = (_id) => api.delete('/akademik/'+_id);

const akademikprofile_select = () => api.get('/akademikprofile');
const akademikprofile_participant = (data) => api.get('/akademikprofile?kode_profile='+ data.kode_profile);
const akademikprofile_read = (id) => api.get('/akademikprofile/'+id);
const akademikprofile_register = (data) => api.post('/akademikprofile/create', data);
const akademikprofile_load = (data) => api.post('/akademikprofile/load', data);
const akademikprofile_update = (id, data) => api.put('/akademikprofile/'+id, data);
const akademikprofile_delete = (_id) => api.delete('/akademikprofile/'+_id);

const sks_select = () => api.get('/sks');
const sks_participant = (data) => api.get('/sks?kode_profile='+ data.kode_profile);
const sks_read = (id) => api.get('/sks/'+id);
const sks_register = (data) => api.post('/sks/create', data);
const sks_load = (data) => api.post('/sks/load', data);
const sks_update = (id, data) => api.put('/sks/'+id, data);
const sks_delete = (_id) => api.delete('/sks/'+_id);

const biayatetapsemester_select = () => api.get('/biayatetapsemester');
const biayatetapsemester_register = (data) => api.post('/biayatetapsemester/create', data);
const biayatetapsemester_update = (id, data) => api.put('/biayatetapsemester/'+id, data);
const biayatetapsemester_delete = (_id) => api.delete('/biayatetapsemester/'+_id);

const biayaprestasi_select = () => api.get('/biayaprestasi');
const biayaprestasi_register = (data) => api.post('/biayaprestasi/create', data);
const biayaprestasi_update = (id, data) => api.put('/biayaprestasi/'+id, data);
const biayaprestasi_delete = (_id) => api.delete('/biayaprestasi/'+_id);

const periode_select = () => api.get('/periode');
const periode_read = (id) => api.get('/periode/'+id);
const periode_register = (data) => api.post('/periode/create', data);
const periode_update = (id, data) => api.put('/periode/'+id, data);
const periode_delete = (_id) => api.delete('/periode/'+_id);

export const apis = {
    user_auth,
    user_register,

    profile_select,
    profile_register,
    profile_update,
    profile_delete,
    profile_photo,
    profile_upload,

    domisili_select,
    domisili_register,
    domisili_update,
    domisili_delete,

    universitas_select,
    universitas_register,
    universitas_update,
    universitas_delete,

    penerimaan_select,
    penerimaan_register,
    penerimaan_update,
    penerimaan_delete,

    akademik_select,
    akademik_read,
    akademik_register,
    akademik_update,
    akademik_delete,

    akademikprofile_select,
    akademikprofile_participant,
    akademikprofile_read,
    akademikprofile_register,
    akademikprofile_update,
    akademikprofile_delete,
    akademikprofile_load,

    sks_select,
    sks_participant,
    sks_read,
    sks_register,
    sks_update,
    sks_delete,
    sks_load,

    biayatetapsemester_select,
    biayatetapsemester_register,
    biayatetapsemester_update,
    biayatetapsemester_delete,

    biayaprestasi_select,
    biayaprestasi_register,
    biayaprestasi_update,
    biayaprestasi_delete,

    periode_select,
    periode_read,
    periode_register,
    periode_update,
    periode_delete,
}

export default apis
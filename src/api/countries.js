import axios from 'axios';
import {API} from './index';
const serverUrl = 'http://localhost:8080/api';

const basicAxios =  axios.create({
    baseURL: serverUrl,
    
});


export const getCountries = () => API('GET','/countries',null,basicAxios);
export const getTopTen = () =>API('GET','/top10',null,basicAxios)

import axios from 'axios';
import {API} from './index';
const serverUrl = 'http://localhost:5000/';

const basicAxios =  axios.create({
    baseURL: serverUrl,
    
});


export const getCountries = () => API('GET','/countries',null,basicAxios);
export const getTopTen = () =>API('GET','/top10',null,basicAxios)

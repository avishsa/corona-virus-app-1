import axios from 'axios';
import {API} from './index';
const serverUrl = 'http://localhost:8080/api';

const basicAxios =  axios.create({
    baseURL: serverUrl,
    
});


export const searchReports = ({country}) => API('GET',`/lastdays?countryId=${country}`,null,basicAxios); //search by criteria


import axios from 'axios';
import {API} from './index';
const serverUrl = 'http://localhost:5000/';

const basicAxios =  axios.create({
    baseURL: serverUrl,
    
});


export const searchReports = ({country}) => API('GET',`/lastdays/${country}`,null,basicAxios); //search by criteria


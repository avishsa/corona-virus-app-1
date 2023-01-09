import { getCountries,getTopTen } from "../api/countries";


const _getAll = () => {
    return getCountries()
        .then(({ data }) => {           
           
            return { data: data };
        })
        .catch(err => {  return { err: err } });
}
const _getTopTen = ()=>{
    return getTopTen()
    .then(({ data }) => {           
       
        return { data: data };
    })
    .catch(err => {  return { err: err } });
}

export const countryService = {

    _getAll,
    _getTopTen,

};
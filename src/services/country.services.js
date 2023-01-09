import { getCountries } from "../api/countries";


const _getAll = () => {
    return getCountries()
        .then(({ data }) => {           
           
            return { data: data };
        })
        .catch(err => {  return { err: err } });
}


export const countryService = {

    _getAll,
  

};
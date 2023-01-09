import { searchReports } from "../api/reports";


const _searchReports = (criteria) => {
    return searchReports(criteria)
        .then(({ data }) => {           
           
            return { data: data };
        })
        .catch(err => {  return { err: err } });
}


export const reportService = {
    _searchReports, 

};
//import { history } from "../help/history";
import { countryService } from "../services/country.services";
import { countryConstants } from "../constants/country.constants";
export const countryActions = {
    getAll,
    getTopTen
};
function getAll() {
    return dispatch => {
        dispatch(request());        
        countryService._getAll()
            .then(
                res => {                    
                    if (res?.data) dispatch(success(res.data))
                    else {
                        if (res?.err) { dispatch(failure(res.err.toString())) }
                        else dispatch(failure("couldn't get reports"))
                    }
                }
            );
    };
    function request() { return { type: countryConstants.GETALL_REQUEST } }
    function success(countries) { return { type: countryConstants.GETALL_SUCCESS, payload: {countries} } }
    function failure(error) { return { type: countryConstants.GETALL_FAILURE, error } }
}
function getTopTen() {
    return dispatch => {
        dispatch(request());
        countryService._getTopTen()
            .then(
                res => {                    
                    if (res?.data) dispatch(success(res.data))
                    else {
                        if (res?.err) { dispatch(failure(res.err.toString())) }
                        else dispatch(failure("couldn't get reports"))
                    }
                }
            );
    };
    function request() { return { type: countryConstants.GET_TOP_TEN_REQUEST } }
    function success(topten) { return { type: countryConstants.GET_TOP_TEN_SUCCESS, payload: {topten} } }
    function failure(error) { return { type: countryConstants.GET_TOP_TEN_FAILURE, error } }
}

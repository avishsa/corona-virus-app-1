//import { history } from "../help/history";
import { countryService } from "../services/country.services";
import { countryConstants } from "../constants/country.constants";
export const countryActions = {
    getAll,
    //getAllHandled,
    //getAllPending,


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


import { reportService } from "../services/report.services";
import { reportConstants } from "../constants/report.constants";
export const reportActions = {
    searchReports,  
};
function searchReports(criteria) {
    return dispatch => {        
        dispatch(request(criteria));        
        reportService._searchReports(criteria)
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
    function request(criteria) { return { type: reportConstants.SEARCH_REPORTS_REQUEST, payload:criteria } }
    function success(reports) { return { type: reportConstants.SEARCH_REPORTS_SUCCESS, payload: {reports} } }
    function failure(error) { return { type: reportConstants.SEARCH_REPORTS_FAILURE, error } }
}

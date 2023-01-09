import { reportConstants } from "../constants/report.constants";
import { stateStatus } from "../constants";
export function reports(state = { items: [],  status: stateStatus.init }, action) {
    switch (action.type) {
        case reportConstants.SEARCH_REPORTS_REQUEST:
            return {
                ...state,
                status: stateStatus.pending
            };
        case reportConstants.SEARCH_REPORTS_SUCCESS: {            
            if (!action.payload ||!action.payload.reports || action.payload.reports.length === 0){    
            return {
                ...state,
                status: stateStatus.invalid
            };
            }
            const {payload} = action;            
            return {
                items: payload.reports,
                status: stateStatus.valid
            };
        }
        case reportConstants.SEARCH_REPORTS_FAILURE:
            return {
            ...state,
                status:stateStatus.invalid
            };
    

        default: return state;
    }
}

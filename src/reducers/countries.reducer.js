import { countryConstants } from "../constants/country.constants";
import { stateStatus } from "../constants";
export function countries(state = { items: [], status: stateStatus.init }, action) {
    switch (action.type) {
        case countryConstants.GETALL_REQUEST:
            return {
                ...state,
                status: stateStatus.pending
            };
        case countryConstants.GETALL_SUCCESS: {            
            if (!action.payload ||!action.payload.countries || action.payload.countries.length === 0){ 
                
                return {
                ...state,
                status: stateStatus.invalid
            };
            }
            const {payload} = action;            
            return {
                items: payload.countries,
                status: stateStatus.valid
            };
        }
        case countryConstants.GETALL_FAILURE:
            return {
               ...state,
               status:stateStatus.invalid
            };
       
               default: return state;
    }
}
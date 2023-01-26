import { countryConstants } from "../constants/country.constants";
import { stateStatus } from "../constants";
export function countries(state = { items: [], status: stateStatus.init ,statusTop10:stateStatus.init}, action) {
    switch (action.type) {
        case countryConstants.GETALL_REQUEST:            
            if(action.payload!==undefined) return {...state};
            return {
                ...state,
                status: stateStatus.pending,            
            };
        case countryConstants.GETALL_SUCCESS: {             
            if(state.status!=stateStatus.pending) return state;          
            if (!action.payload ||!action.payload.countries || action.payload.countries.length === 0){                                    
                return {
                ...state,
                status: stateStatus.invalid
            };
            }
            const {payload} = action;               
            return {
                ...state,
                items: payload.countries,
                status: stateStatus.valid
            };
        }
        case countryConstants.GETALL_FAILURE:            
            if(state.status!=stateStatus.pending) return state;         
            return {
               ...state,
               status:stateStatus.invalid
            };
       case countryConstants.GET_TOP_TEN_REQUEST:        
            return {
            ...state,
            statusTop10:stateStatus.init
         };
         case countryConstants.GET_TOP_TEN_SUCCESS:            
            if (!action.payload ||!action.payload.topten || action.payload.topten.length === 0){                   
                return {
                ...state,
                statusTop10: stateStatus.invalid
            };
            }
            const {payload} = action;               
            return {
                ...state,
                topten: payload.topten,
                statusTop10: stateStatus.valid
            };
        case countryConstants.GET_TOP_TEN_FAILURE:                            
                return {
                   ...state,
                   statusTop10:stateStatus.invalid
                };
               default: return state;
    }
}
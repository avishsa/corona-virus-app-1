import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { countryActions } from "../../actions/countryActions";
import { stateStatus } from '../../constants';


import { BarCountries } from './graph/BarCountries';



export default function CountryGraph() {   
    
    const countries = useSelector(state => { return state.countries } );        
    const dispatch = useDispatch();
    
    useEffect(() => {   
        if(countries.statusTop10===stateStatus.init){              
          dispatch(countryActions.getTopTen());   
        }     
    }, [dispatch, countries.statusTop10]);    
    switch(countries.statusTop10){
      case stateStatus.pending: return <div>Loading</div>;     
      case stateStatus.valid: return <BarCountries {...countries}/>;
      case stateStatus.invalid:  return <div>no data for 10 top countries</div>;
      case stateStatus.init: 
      default: return <div></div>;
    }
   
   
    
    

}



import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { countryActions } from "../actions/countryActions";
import { stateStatus } from '../constants';
import CountryItem from './country/CountryItem';


export default function CountryGraph() {   
    
    const countries = useSelector(state => { 
        
        return state.countries }
        );    
    const status = useSelector(state => { return state.countries.status });
    const dispatch = useDispatch();
    
    useEffect(() => {   
        if(status===stateStatus.init)     
        dispatch(countryActions.getAll());        
    }, [dispatch, status]);
    console.log(countries.items);

    


    return (<div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
     Select country
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      {countries.items.map(i=>{
      return <CountryItem {...i}/>})}
    </div>
  </div>);

}
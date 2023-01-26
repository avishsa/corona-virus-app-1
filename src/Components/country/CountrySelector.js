import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { countryActions } from "../../actions/countryActions";
import { stateStatus } from '../../constants';
import CountryItem from './CountryItem';

const DropDownListCountries = ({items})=>{
    return (<div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   Select country
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    {items.map(i=>{
    return <CountryItem key={i.id}{...i}/>})}
  </div>
</div>);
}

export default function CountrySelector() {   
    const countries = useSelector(state =>state.countries);        
    const dispatch = useDispatch();    
    useEffect(() => {         
        if(countries.status===stateStatus.init) {              
          dispatch(countryActions.getAll());       
        } 
    }, [dispatch, countries.status]);    
    switch (countries.status){
      case stateStatus.pending: return <div>Loading</div>;     
      case stateStatus.valid: return <DropDownListCountries {...countries}/>;
      case stateStatus.invalid:  return <div>no data for countries</div>;
      case stateStatus.init: 
      default: return <div></div>;
    }
}
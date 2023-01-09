import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { countryActions } from "../../actions/countryActions";
import { stateStatus } from '../../constants';
import CountryItem from './CountryItem';


export default function CountrySelector() {   
    
    const countries = useSelector(state => { 
        
        return state.countries }
        );    
    const status = useSelector(state => { return state.countries.status });
    const dispatch = useDispatch();
    
    useEffect(() => {   
        if(status===stateStatus.init)     
        dispatch(countryActions.getAll());        
    }, [dispatch, status]);
    

    


    return (<div className="dropdown">
    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
     Select country
    </button>
    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
      {countries.items && countries.items.map(i=>{
      return <CountryItem key={i.id}{...i}/>})}
    </div>
  </div>);

}
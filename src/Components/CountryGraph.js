import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { countryActions } from "../actions/countryActions";
import { stateStatus } from '../constants';


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

    


    return (<div>       

    </div>);

}
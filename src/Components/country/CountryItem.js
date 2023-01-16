import React from 'react';
import { useDispatch } from 'react-redux';
import { reportActions } from "../../actions/reportActions";


export default function CountryItem({location,id,isocode}) {   
    const dispatch = useDispatch();   
    const selectCountry = (e)=>{
      e.preventDefault();      
        dispatch(reportActions.searchReports({location:location,country:isocode,duration:10}));
    }    
    return (
      <a className="dropdown-item" href="/" key={isocode}onClick={(e)=>selectCountry(e)}>{location}</a> 
  );

}
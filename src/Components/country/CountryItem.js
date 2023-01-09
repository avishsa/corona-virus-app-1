import React from 'react';
import { useDispatch } from 'react-redux';
import { reportActions } from "../../actions/reportActions";


export default function CountryItem({location,id}) {   
    const dispatch = useDispatch();   
    const selectCountry = (e)=>{
      e.preventDefault();
      e.stopPropagation()
        dispatch(reportActions.searchReports({country:id,duration:10}));
    }    
    return (
      <a className="dropdown-item" href="/" key={id}onClick={(e)=>selectCountry(e)}>{location}</a> 
  );

}
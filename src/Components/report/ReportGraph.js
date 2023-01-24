import React from 'react';
import { useSelector } from 'react-redux';

import { stateStatus } from '../../constants';
import { LineNewCases } from './graph/LineNewCases'; 




export default function ReportGraph() {   
    
    const reports = useSelector(state =>state.reports );   
    switch(reports.status){
        case stateStatus.pending: return <div>Loading</div>;     
        case stateStatus.valid: return <div><LineNewCases {...reports} /></div>;
        case stateStatus.invalid: if(reports.query) return <div>{`no data for 10 last days for ${reports.query.location}`}</div>;
        case stateStatus.init: 
        default: return <div></div>;
    }
    
    
  

}

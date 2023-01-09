import React from 'react';
import { useSelector } from 'react-redux';

import { stateStatus } from '../../constants';
import { LineNewCases } from './graph/LineNewCases'; 




export default function ReportGraph() {   
    
    const reports = useSelector(state => { 
        
        return state.reports }
        );    
    const status = useSelector(state => { return state.reports.status });
    
    return status===stateStatus.valid ?(<div >
        <LineNewCases {...reports} />
    
     
    
  </div>):<div></div>;

}

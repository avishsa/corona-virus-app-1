import React from 'react';
import { useSelector } from 'react-redux';

import { stateStatus } from '../constants';
import { LineNewCases } from './report/graph/LineNewCases'; 




export default function ReportGraph() {   
    
    const reports = useSelector(state => { 
        
        return state.reports }
        );    
    const status = useSelector(state => { return state.reports.status });
    
    
   

    

    console.log(reports.items);
    return status===stateStatus.valid ?(<div >
        <LineNewCases {...reports} />
    
      {/* {reports.items.map(i=>{
      return <div> </div>})} */}
    
  </div>):<div></div>;

}

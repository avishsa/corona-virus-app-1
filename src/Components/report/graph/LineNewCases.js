import React from 'react';

import {
  Chart as ChartJS,
  TimeScale,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import "chartjs-adapter-luxon";

ChartJS.register(
  TimeScale,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  //Title,
  //Tooltip,
  //Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Country last days',
    },
    
  },scales: {
    y: {
      title: {display: true, text: "new cases"}
    },
    x: {
      title: {display: true, text: "dates"},
      type:"time",
      time: { unit: 'day'}
     
    }
  }
  
};




export function LineNewCases({items,query} ) {  
  let data_items=items.map(el=>{return {"x":new Date(el.ReportDate),"y":el.New_cases}});
  
const data = {
  
  datasets:[{
    label: `${query?.location??"country"}`,
    data: data_items,
    borderColor: 'rgb(255, 99, 132)',
    backgroundColor: 'rgba(255, 99, 132, 0.5)',
  }]

};
  return <Line options={options} data={data} />;
}

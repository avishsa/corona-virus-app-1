import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { countryActions } from "../../actions/countryActions";
import { stateStatus } from '../../constants';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

export const options = {
    indexAxis: 'x',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right' ,
      },
      title: {
        display: true,
        text: 'Top 10',
      },
    },
    scales: {
        x: {
            stacked: true
        },
        y: {
            stacked: true
        }
    }
  };
export default function CountryGraph() {   
    
    const countries = useSelector(state => { return state.countries } );    
    const status = useSelector(state => { return state.countries.statusTop10 });
    const dispatch = useDispatch();
    
    useEffect(() => {   
        if(status===stateStatus.init)     
        dispatch(countryActions.getTopTen());        
    }, [dispatch, status]);
    
    if(countries.statusTop10!==stateStatus.valid)   {     return <div></div>;  }
    
    const data = { 
        labels:  countries.topten.map(el=>el.location),
        datasets: [
        {
          label: 'total cases',
          barPercentage: 0.5,
          barThickness: 50,
         
          data:  countries.topten.map(el=>el.total_cases),
          
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'total death',
            barPercentage: 0.5,
            barThickness: 50,
           
            data:  countries.topten.map(el=>el.total_deaths),
            
            backgroundColor: 'rgba(53, 162, 235, 0.5)'
          },
        
    ]
    };
    


    return (<div className="">    
    {countries.statusTop10===stateStatus.valid&& <Bar options={options} data={data} />}
  </div>);

}

/*
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
  Title,
  Tooltip,
  Legend
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
      time: {        unit: 'day'   }
     
    }
  }
  
};




export function LineNewCases({items,query} ) {  
  
const data = {
  
  datasets:[{
    label: `${query?.country??"country"}`,
    data: items.map(el=>{return {"x":el.date,"y":el.new_cases}}),
    borderColor: 'rgb(255, 99, 132)',
    backgroundColor: 'rgba(255, 99, 132, 0.5)',
  }]

};
  return <Line options={options} data={data} />;
}

*/
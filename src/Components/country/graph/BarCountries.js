import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,   
    BarElement    
  } from 'chart.js';

  ChartJS.register( 
    BarElement    
  );

const options = {
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
  
export function BarCountries({topten} ) { 
    const style ={barPercentage:0.5,barThickness:50,backgroundColor:{red:'rgba(255, 99, 132, 0.5)',blue:'rgba(53, 162, 235, 0.5)'}}
    const data = { 
        labels:  topten.map(el=>el.location),
        datasets: [
            {
            label: 'total cases',
            barPercentage: style.barPercentage,
            barThickness: style.barThickness,         
            data: topten.map(el=>el.total_cases),          
            backgroundColor: style.backgroundColor.red,
            },
            {
                label: 'total death',
                barPercentage: style.barPercentage,
                barThickness: style.barThickness,           
                data: topten.map(el=>el.total_deaths),            
                backgroundColor: style.backgroundColor.blue
            }
        ]
    };   
    return <Bar options={options} data={data} />;
}
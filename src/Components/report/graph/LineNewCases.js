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
    scales: {
      yAxes: {
        title: {display: true, text:"new cases"}
      },
      xAxes: {
          title: "time",
          type: 'time',
          gridLines: {
              lineWidth: 2
          },
          time: {
              unit: "day",
              unitStepSize: 1000,
              displayFormats: {
                  millisecond: 'MMM DD',
                  second: 'MMM DD',
                  minute: 'MMM DD',
                  hour: 'MMM DD',
                  day: 'MMM DD',
                  week: 'MMM DD',
                  month: 'MMM DD',
                  quarter: 'MMM DD',
                  year: 'MMM DD',
              }
          }
      }
  }
  },
  
};




export function LineNewCases(props) {
  console.log(props);
  const {items,query} = props;

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

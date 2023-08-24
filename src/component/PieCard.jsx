import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2';
import LoadingBar from './LoadingBar';

const PieCard = () => {

    
    const [covidData, setCovidData] = useState([]);
    const [loading,setLoding] = useState(true)
    const fetchingData = async () => {
   const response =  await axios.get("https://disease.sh/v3/covid-19/all");
      setCovidData(response.data)
      setLoding(false)
    };
    useEffect(() => {
      fetchingData();
    }, []);
    
    const {deaths,tests,cases,population,recovered} =covidData;
    const chartData = {
        labels: ['Cases', 'Deaths', 'Tests', 'Population', 'Recovered'],
        datasets: [
          {
            data: [deaths,tests,cases,population,recovered],
            backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple'],
          },
        ],
      };
  return (
    <>
      {
          loading?<LoadingBar/>:  <div>
          <h2>Pie Chart of Covid Statistics</h2>
          <Pie data={chartData} />
          </div>
        }
       
        </>

  )
}

export default PieCard
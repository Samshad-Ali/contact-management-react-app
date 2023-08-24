import React,{useState,useEffect} from 'react';
import axios from 'axios';
import LoadingBar from './LoadingBar';
import { Link } from 'react-router-dom';
const Charts_Maps = () => {
  const [data, setData] = useState([]);
  const [loading,setLoding] = useState(true)
  const fetchingData = async () => {
    axios
      .get("https://disease.sh/v3/covid-19/countries")
      .then((response) => {
        setData(response.data);
        setLoding(false)
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchingData();
  }, []);
  
  return (
    <>
    {
      loading ? <LoadingBar/> :  <div className='w-full mt-2 flex flex-col items-center gap-4 h-[90vh] overflow-auto'>
      <h1 className='border-black border-b-2 md:text-3xl font-bold'>COVID-19 Statistics Dashboard</h1>
        <button className='py-1 px-4 bg-orange-600 rounded-sm font-semibold'><Link to={'/pie'}>Click for Pie Chart</Link></button>
         <table className='tables w-[90%] m-auto shadow-lg shadow-slate-700 rounded-md  '>
            <tr>
              <th>Name</th>
              <th>Flags</th>
              <th>Cases</th>
              <th>Deaths</th>
              <th>Recovered</th>
              <th>Tests</th>
            </tr>
            {
                     data?.map((item,id)=>{
                      const {country,tests,cases,recovered,deaths} = item    
                return(
                    <tr key={id}>
                        <td> {country} </td>
                        <td><img className='w-[50px]' src={item.countryInfo.flag} alt="" /></td>
                        <td> {cases} </td>
                        <td> {deaths} </td>
                        <td> {recovered} </td>
                        <td> {tests} </td>
                    </tr>)
                      } )
                    }
        </table>
      
    </div> 
    }
    
  
        </>
  );
}

export default Charts_Maps;

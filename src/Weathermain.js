import React, { useState } from 'react'
import SearchCity from './SearchCity';
import axios from 'axios';
import Weather from './Weather'
function Weathermain() {
    const [weatherData, setWeatherData ] = useState(null)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const Searchcity = async(city) =>{
setLoading(true);

    try{
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5bad318e40541eb51c4e080335c50de9&units=metric`
      )
      setWeatherData(response.data);
      setError('');
    }
    catch(err){
      setError('City not found');
    }
    setLoading(false);
  };

  return (
    <div>
        <h1 className='heading'>Weather App</h1>
        <SearchCity  fetchWeather={Searchcity}/>
        {loading && <p>Loading...</p>}
        {error && <p style={{color: 'red'}}>{error}</p>}
        {weatherData && <Weather data={weatherData}/>}
    </div>
  )
}

export default Weathermain;

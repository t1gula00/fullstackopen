import React, {useState, useEffect} from 'react'
import axios from 'axios'

const OneCountryBlock = ({country}) => {
  const [cityWeather, setCityWeather] = useState({});
  const { name, capital, population, languages, flag } = country[0]; 

  useEffect(() => {
    const _baseUrl = 'http://api.apixu.com/v1';
    axios
      .get(`${_baseUrl}/current.json?key=6be49112da992ee2edea68045afbf852
      =${capital}`)
      .then(response => {
        setCityWeather(response.data);
      })
  }, []);

  const langBlock = languages.map((lang) => {
    return (
      <li key={lang.name}>{lang.name}</li>
    )
  });

  const weatherBlock = cityWeather.location ? 
    <div>
      <div><b>temperature: {cityWeather.current.temp_c} Celsius</b></div>
      <img src={cityWeather.current.condition.icon} alt=""/>
      <div><b>wind: </b> {cityWeather.current.wind_kph} kph, direction {cityWeather.current.wind_dir} </div>
    </div> : 
    <div>nothing</div>;

  return (
    <div>
      <h1>{name}</h1>
      <div>capital: {capital}</div>
      <div>population: {population}</div>
      <h2>languages:</h2>
      <ul>
        {langBlock}
      </ul>
      <img src={flag} alt=""/>
      <h2>weather in {capital}</h2>
      {weatherBlock}      
    </div>
  )
};

export default OneCountryBlock;
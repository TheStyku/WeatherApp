import './css/App.css';
import { useState, useEffect } from 'react';
import Form from './components/Form';
import FoureDays from './components/FoureDays';
import ToDayWeather from './components/ToDayWeather';
import {MdMyLocation} from 'react-icons/md'


function App() {

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  const [city_name, setCity_Name] = useState();

  async function fetchAsyncName() {
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=c5ef29e043f242eba35151603221509&q=${city_name}&aqi=no&days=14&lang=pl`);
    let result = await response.json();
    setData(result);
    (result.message === 'city not found') ? (
      alert('Miasto nie istnieje')
    ) : (
      console.log(result)
    );
    return console.log(result);
  }

  async function fetchAsyncLocal() {
    try {
      let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=c5ef29e043f242eba35151603221509&q=${lat},${long}&aqi=no&days=14&lang=pl`)
      let result = await response.json();
      setData(result);
      return console.log(result);
    } catch (error) {

    }

  }
  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
    }
    fetchData();
  }, [lat, long])

  return (

    <div className="App">
      <div className='container'>
        <div className='header'>
          <div className='header_content'>
            <p className='header_name'>Wyszukaj lokalizacje </p>
            <Form className='form' city_name={city_name} setCity_Name={setCity_Name} fetchAsync={fetchAsyncName} />
          </div>
          <div className='header_content'>
            <p className='header_name'>Znajdz po twojej lokalizacji</p>
            <button className='btn_location' onClick={fetchAsyncLocal}><MdMyLocation/></button>
          </div>
        </div>
        <div className='weather_text' >
          <p>Dzisiejsza pogoda</p>
          <p className='header_name'>Miejscowość: {(data.length !== 0) ? (data.location.name) : (<></>)} </p>
        </div>
        {(data.length === 0) ? (
          <></>
        ) : (
          <div className='content'>
            <ToDayWeather weatherData={data} />
            <h2 className='long_term_tittle'>Pogoda {data.location.name} - prognoza długo terminowa </h2>
            <FoureDays weatherData={data} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

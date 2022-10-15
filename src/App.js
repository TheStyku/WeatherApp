import './css/App.css';
import { useState, useEffect } from 'react';
import Form from './components/Form';
import FoureDays from './components/FoureDays';
import ToDayWeather from './components/ToDayWeather';
import FrontPage from './components/FrontPage';
import axios from 'axios';

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  const [city_name, setCity_Name] = useState();
  const [location, setLocation] = useState(false)

  async function fetchAsyncName() {
    let AppiPoint = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city_name}%2C%20Polska?unitGroup=metric&include=days&lang=pl&key=${process.env.REACT_APP_API_KEY}&contentType=json`
    axios.get(AppiPoint).then((response) => {
      setData(response.data)
      setLocation(true)
    }).catch(err => {
      alert('Takie miasto nie istnieje')
    })
  }

  async function fetchAsyncLocal() {
    let AppiPoint = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${long}?unitGroup=metric&include=days&lang=pl&key=${process.env.REACT_APP_API_KEY}&contentType=json`
    axios.get(AppiPoint).then((response) => {
      setData(response.data)
      setLocation(false)
    })
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  }, [])

  return (
    <div className="App">
      <div className='container'>
        {(data.length === 0) ? (
          <div className='bg'>
            <div className='cloud'>
              <FrontPage city_name={city_name} setCity_Name={setCity_Name} fetchAsyncName={fetchAsyncName} fetchAsyncLocal={fetchAsyncLocal} />
            </div>

          </div>
        ) : (
          <>
            <div className='header'>
              <div className='header_content'>
                <p className='header_name'>Wyszukaj lokalizacje </p>
                <Form className='form' city_name={city_name} setCity_Name={setCity_Name} fetchAsyncName={fetchAsyncName} />
              </div>
              <div className='header_content'>
                <button className='btn_location' onClick={fetchAsyncLocal}>Znajdz po twojej lokalizacji</button>
              </div>
            </div>
            <div className='weather_text' >
              <p>Dzisiejsza pogoda</p>
              <p className='header_name'>Miejscowość: {(data.length !== 0 && location === true) ? (data.address) : (<></>)} </p>
            </div>
            <div className='content'>
              <ToDayWeather weatherData={data} />
              <h2 className='long_term_tittle'>Pogoda {(location === true) ? (data.address) : (<></>)} - prognoza długo terminowa </h2>
              <FoureDays weatherData={data} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;


import './css/App.css';
import { useState, useEffect } from 'react';
import Form from './components/Form';
import FoureDays from './components/FoureDays';
import ToDayWeather from './components/ToDayWeather';
import { MdMyLocation } from 'react-icons/md'


function App() {

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  const [city_name, setCity_Name] = useState();

  async function fetchAsyncName() {
    let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city_name}%2C%20Polska?unitGroup=metric&include=days&lang=pl&key=${process.env.APP_KEY}&contentType=json`);
    let result = await response.json();
    (response.ok) ? (
      setData(result)
    ) : (
      alert('Miasto nie istnieje')
    );
    return console.log(result);
  }

  async function fetchAsyncLocal() {
    try {
      let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${long}?unitGroup=metric&include=days&lang=pl&key=${process.env.APP_KEY}&contentType=json`);
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
            <button className='btn_location' onClick={fetchAsyncLocal}><MdMyLocation /></button>
          </div>
        </div>

        {(data.length === 0) ? (
          <div className='bg_img'>
          </div>

        ) : (
          <>
            <div className='weather_text' >
              <p>Dzisiejsza pogoda</p>
              <p className='header_name'>Miejscowość: {(data.length !== 0) ? (data.address) : (<></>)} </p>
            </div>
            <div className='content'>
              <ToDayWeather weatherData={data} />
              <h2 className='long_term_tittle'>Pogoda {data.address} - prognoza długo terminowa </h2>
              <FoureDays weatherData={data} />
            </div>

          </>
        )}
      </div>
    </div>
  );
}

export default App;


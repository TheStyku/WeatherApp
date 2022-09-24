import React from 'react'
import moment from 'moment';
import 'moment/locale/pl'
import { FiWind } from 'react-icons/fi'
import { WiHumidity, WiThermometer } from 'react-icons/wi'


moment.locale('pl')


function ToDayWeather({ weatherData }) {
    return (
        <div className='To_Day_Weather'>
            <div className='To_Day_Weather_Main'>
                <img src={weatherData.forecast.forecastday[0].day.condition.icon} alt='Wheater'></img>
                <p>{Math.trunc(weatherData.forecast.forecastday[0].day.maxtemp_c)}&deg;C</p>
            </div>
            <div className='Weather_content'>
                <WiThermometer className='Weather_icon' />
                <div className='To_Day_Weather_box'>
                    <p className='To_Day_Weather_box_tittle'>{weatherData.forecast.forecastday[0].day.condition.text}</p>
                    <p>Odczuwalna {Math.trunc(weatherData.current.feelslike_c)}&deg;C</p>
                </div>
            </div>
            <div className='Weather_content'>
                <FiWind className='Weather_icon' />
                <div className='To_Day_Weather_box'>
                    <p className='To_Day_Weather_box_tittle'>Wiatr:</p>
                    <p>{weatherData.forecast.forecastday[0].day.maxwind_kph} km/h</p>
                </div>
            </div>
            <div className='Weather_content'>
                <WiHumidity className='Weather_icon'/>
                <div className='To_Day_Weather_box'>
                    <p className='To_Day_Weather_box_tittle'>Wilgotność:</p>
                    <p>{weatherData.forecast.forecastday[0].day.avghumidity}%</p>
                </div>
            </div>
        </div>
    )
}

export default ToDayWeather
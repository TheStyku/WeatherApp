import React from 'react'
import moment from 'moment';
import 'moment/locale/pl'
import { FiWind } from 'react-icons/fi'
import { WiHumidity, WiThermometer } from 'react-icons/wi'
import Icons from './Icons'

moment.locale('pl')

function ToDayWeather({ weatherData }) {
    return (
        <div className='To_Day_Weather'>
            <div className='To_Day_Weather_Main'>
                <Icons weather={weatherData.days[0].icon} />
                <p>{Math.trunc(weatherData.days[0].temp)}&deg;C</p>
            </div>
            <div className='Weather_content'>
                <WiThermometer className='Weather_icon_Weather termometr' />
                <div className='To_Day_Weather_box'>
                    <p className='To_Day_Weather_box_tittle'>{weatherData.days[0].conditions}</p>
                    <p>Odczuwalna {Math.trunc(weatherData.days[0].feelslikemax)}&deg;C</p>
                </div>
            </div>
            <div className='Weather_content'>
                <FiWind className='Weather_icon' />
                <div className='To_Day_Weather_box'>
                    <p className='To_Day_Weather_box_tittle'>Wiatr:</p>
                    <p>{weatherData.days[0].windspeed} km/h</p>
                </div>
            </div>
            <div className='Weather_content'>
                <WiHumidity className='Weather_icon' />
                <div className='To_Day_Weather_box'>
                    <p className='To_Day_Weather_box_tittle'>Wilgotność:</p>
                    <p>{weatherData.days[0].humidity}%</p>
                </div>
            </div>
        </div>
    )
}

export default ToDayWeather
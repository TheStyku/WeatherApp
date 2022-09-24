import React from 'react'
import moment from 'moment';
import 'moment/locale/pl'

moment.locale('pl')

function Dni({ weatherData }) {
    return (
        <>
            <ul className='Days'>
                    <li key={weatherData.forecast.forecastday[0].date_epoch} className='box'>
                        <div className='box_header' >
                            <h3>{moment(weatherData.forecast.forecastday[0].date).format('dddd')}</h3> 
                        </div>
                        <div className='box_body'>
                            <p className='tittle_text'>{Math.trunc(weatherData.forecast.forecastday[0].day.maxtemp_c)} &deg;C</p>
                            <img src={weatherData.forecast.forecastday[0].day.condition.icon}n alt='Wheater'></img>                          
                        </div>
                        <div className='box_body'>
                            <p className='primary_text'>Wiatr:</p>
                            <p className='secondary_text'>{weatherData.forecast.forecastday[0].day.maxwind_kph} km/h</p>
                        </div>
                        <div className='box_body'>
                            <p className='primary_text'>Wilgotność:</p>
                            <p className='secondary_text'>{weatherData.forecast.forecastday[0].day.avghumidity}%</p>
                        </div>
                        <div className='box_body'>
                            <p className='primary_text'>Wschód słońca:</p>
                            <p className='secondary_text'>{weatherData.forecast.forecastday[0].astro.sunrise}</p>
                        </div>
                        <div className='box_body'>
                            <p className='primary_text'>Zachód słońca:</p>
                            <p className='secondary_text'>{weatherData.forecast.forecastday[0].astro.sunset}</p>
                        </div>

                    </li>
            </ul>
            {/*<p>Temprature: {weatherData.main.temp} &deg;C</p>
            <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('pl')}</p>
            <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('pl')}</p>
            <p>Description: {weatherData.weather[0].description}</p>
            <p>Humidity: {weatherData.main.humidity} %</p>
            <p>Day: {moment().format('dddd')}</p>
            <p>Date: {moment().format('LL')}</p>
            <button className='button' onClick={refresh}>refresh</button>*/}
        </>
    )
}

export default Dni


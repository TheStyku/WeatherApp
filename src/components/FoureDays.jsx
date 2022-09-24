import React from 'react'
import moment from 'moment';
import 'moment/locale/pl'
import { FiWind } from 'react-icons/fi'
import { WiHumidity, WiRaindrop } from 'react-icons/wi'

moment.locale('pl')


function FoureDays({ weatherData }) {
    return (
        <ul className='Days'>
            {weatherData.forecast.forecastday.map((day, index) => (
                <li key={index} className='box'>
                    {(index.toString() === 0) ?
                        (<></>) :
                        (<>
                            <div className='box_day'>
                                <p>{moment(day.date).format('dddd')}</p>
                                <p>{day.date}</p>
                            </div>
                            <div className='box_body'>
                                <img className='icon' src={day.day.condition.icon} alt='Wheater'></img>
                                <p className='tittle_text'>{Math.trunc(day.day.maxtemp_c)} &deg;C</p>
                            </div><div className='box_day'>
                                <p className='long_grey_text'>Minimalna {Math.trunc(day.day.mintemp_c)} &deg;C</p>
                                <p>{day.day.condition.text}</p>
                            </div><div className='box_day'>
                                <p className='long_grey_text'>Opady:</p>
                                <p className='box_icon'><WiRaindrop className='icon' />{day.day.daily_chance_of_rain}%</p>
                            </div><div className='box_day'>
                                <p className='long_grey_text'>Wiatr:</p>
                                <p className='box_icon'><FiWind className='icon' />{day.day.maxwind_kph}km/h</p>
                            </div><div className='box_day'>
                                <p className='long_grey_text'>Wilgotność:</p>
                                <p className='box_icon'><WiHumidity className='icon' />{day.day.avghumidity}%</p>
                            </div></>)}
                </li>
            ))}
        </ul>
    )
}

export default FoureDays



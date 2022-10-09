import React from 'react'
import moment from 'moment';
import 'moment/locale/pl'
import { FiWind } from 'react-icons/fi'
import { WiHumidity, WiRaindrop } from 'react-icons/wi'
import Icon from './Icons'

moment.locale('pl')



function FoureDays({ weatherData }) {


    return (
        <ul className='Days'>
            {weatherData.days.map((day, index) => (
                <li key={index} className='box'>
                    {(index === 0) ?
                        (<></>) :
                        (<>
                            <div className='box_day'>
                                <p>{moment(day.datetime).format('dddd')}</p>
                                <p>{day.datetime}</p>
                            </div>
                            <div className='box_body'>
                                <Icon className='icon' weather={day.icon}></Icon>
                                <p className='tittle_text'>{Math.trunc(day.tempmax)}&deg;C</p>
                            </div><div className='box_day'>
                                <p className='long_grey_text'>Minimalna {Math.trunc(day.tempmin)}&deg;C</p>
                                <p>{day.conditions}</p>
                            </div><div className='box_day'>
                                <p className='long_grey_text'>Opady:</p>
                                <p className='box_icon'><WiRaindrop className='icon' />{day.precipprob}%</p>
                            </div><div className='box_day'>
                                <p className='long_grey_text'>Wiatr:</p>
                                <p className='box_icon'><FiWind className='icon' />{day.windspeed}km/h</p>
                            </div><div className='box_day'>
                                <p className='long_grey_text'>Wilgotność:</p>
                                <p className='box_icon'><WiHumidity className='icon' />{day.humidity}%</p>
                            </div></>)}
                </li>
            ))}
        </ul>
    )
}

export default FoureDays



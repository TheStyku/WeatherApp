import React from 'react'
import * as Icon from "react-icons/wi";
import {HiSun} from 'react-icons/hi'

function Icons(props) {
    if (props.weather === 'rain') {
        return <Icon.WiRain className='Weather_icon sky' />
    } else if (props.weather === 'clear-day') {
        return <HiSun className='Weather_icon sunny' />
    } else if (props.weather === 'cloudy') {
        return <Icon.WiCloud className='Weather_icon sky'/>
    } else if (props.weather === 'fog') {
        return <Icon.WiFog className='Weather_icon sky'/>
    } else if (props.weather === 'partly-cloudy-day') {
        return <Icon.WiDayCloudy className='Weather_icon sky'/>
    } else if (props.weather === 'rain-snow-showers-day') {
        return <Icon.WiDayShowers className='Weather_icon sky'/>
    } else if (props.weather === 'rain-snow') {
        return <Icon.WiRainMix className='Weather_icon sky'/>
    } else if (props.weather === 'sleet') {
        return <Icon.WiDaySleet className='Weather_icon sky'/>
    } else if (props.weather === 'snow') {
        return <Icon.WiSnow className='Weather_icon sky'/>
    } else if (props.weather === 'thunder-rain') {
        return <Icon.WiDayThunderstorm className='Weather_icon sky'/>
    } else if (props.weather === 'thunder') {
        return <Icon.WiDayThunderstorm className='Weather_icon sunny' />
    } else {
        return <Icon.WiCloud />
    }
}

export default Icons
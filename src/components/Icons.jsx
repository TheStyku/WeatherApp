import React from 'react'
import * as Icon from "react-icons/wi";



function Icons(props) {
    if(props.weather==='rain'){
        return <Icon.WiRain className='Weather_icon' />
    }else if(props.weather==='clear-day'){
        return <Icon.WiDaySunny className='Weather_icon' />
    }else if(props.weather==='cloudy'){
        return <Icon.WiCloud className='Weather_icon'/>
    }else if(props.weather==='fog'){
        return <Icon.WiFog className='Weather_icon'/>
    }else if(props.weather==='partly-cloudy-day'){
        return <Icon.WiDayCloudy className='Weather_icon'/>
    }else if(props.weather==='rain-snow-showers-day'){
        return <Icon.WiDayShowers className='Weather_icon'/>
    }else if(props.weather==='rain-snow'){
        return <Icon.WiRainMix className='Weather_icon'/>
    }else if(props.weather==='sleet'){
        return <Icon.WiDaySleet className='Weather_icon'/>
    }else if(props.weather==='snow'){
        return <Icon.WiSnow className='Weather_icon'/>
    }else if(props.weather==='thunder-rain'){
        return <Icon.WiDayThunderstorm className='Weather_icon'/>
    }else if(props.weather==='thunder'){
        return <Icon.WiDayThunderstorm className='Weather_icon'/>
    }else{
        return <Icon.WiCloud/>
    }          
}

export default Icons
import React from 'react'
import Form from './Form'
import { MdMyLocation } from 'react-icons/md';

function FrontPage({city_name, setCity_Name, fetchAsyncName, fetchAsyncLocal}) {
  return (
    <div className='front_tittle'>
        <h1 >14 dniowa prognoza pogody</h1>
        <p>Wyszukaj pogode po nazwie: </p>
        <div className='front_form' ><Form city_name={city_name} setCity_Name={setCity_Name} fetchAsync={fetchAsyncName}/></div>
        
        <p>Lub znajdz po swojej lokalizacji <button className='front_button' onClick={fetchAsyncLocal}> <MdMyLocation/></button></p>      
    </div>
  )
}

export default FrontPage
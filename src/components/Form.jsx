import React from 'react'


function Form({ city_name, setCity_Name, fetchAsyncName }) {

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchAsyncName();
    setCity_Name('');
  }

  return (

    <form onSubmit={handleSubmit} className='form' >
        <input className='input'
          type="text"
          value={city_name || ""}
          onChange={(e) => setCity_Name(e.target.value)}
          placeholder="Search"
        />
    </form>
  )
}

export default Form
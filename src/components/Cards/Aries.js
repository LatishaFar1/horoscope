import React, {useEffect, useState} from 'react'

function Aries() {


    const [aries, setAries] = useState([])


  
    useEffect(()=> {
      fetch('https://aztro.sameerkumar.website/?sign=aries', {
        method: 'POST'
      })
      .then(response => response.json())
      .then(data => setAries(data))
      console.log(aries)
    }, [])
  
    function onClick(){

    }

  return (
    <div>Aries



      
   
      <button> <img className='horoscope-btn' src='https://cdn2.vectorstock.com/i/1000x1000/23/76/aries-ram-zodiac-sign-icon-vector-11832376.jpg' alt='aries'/> </button>
   
    </div>
  )
}

export default Aries
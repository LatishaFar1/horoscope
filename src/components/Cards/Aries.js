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
    }, [''])
  
  return (
    <div>Aries</div>
  )
}

export default Aries
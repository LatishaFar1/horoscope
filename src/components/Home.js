import React, {useEffect, useState} from 'react'


function Home() {

  const [aries, setAries] = useState([])

  const URL = 'https://aztro.sameerkumar.website/?sign=aries';


  // fetch(URL, {
  //     method: 'POST'
  // })
  // .then(response => response.json())
  // .then(json => {
  //     const desc = json.description;
  //     console.log(desc);
  // });

  useEffect(()=> {
    fetch('https://aztro.sameerkumar.website/?sign=aries', {
      method: 'POST'
    })
    .then(response => response.json())
    .then(data => setAries(data))
    console.log(aries)
  }, [])

  return (
    <div>
       Home


    </div>
  )
}

export default Home
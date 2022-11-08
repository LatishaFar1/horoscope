import React from 'react'
import {Link} from "react-router-dom";

function Home() {

    
  return (
    <div className='home'>
       Home
       

     {/* <Link></Link>   */}
        <div className='main-img'>
          <a href='/horoscopes'>
            <img src='https://cdn.pixabay.com/photo/2021/11/19/08/19/astrology-6808362_1280.png'
            alt='horoscope circle' />

          </a>
        </div>
    

    </div>
  )
}

export default Home
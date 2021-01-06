  
import React from 'react'
import '../../styles/App.css'
import Home from './Home'
import Products from './Products'
// import Contact from '../contact/Contact'

function HomePage() {
  return (
    <div>
      
      <div className='backgroundImage'>
        <Home />
      </div>

      <div className='primaryBackgroundColour'>
        <Products />
      </div>

      {/* <div>
        <PriceSlideShow />
      </div>   */}

      {/* <div className='backgroundImageContact'> 
        <Contact />
      </div> */}
      
    </div>
  )
}

export default HomePage
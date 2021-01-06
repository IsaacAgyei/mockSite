import React from 'react'
import '../../styles/App.css'

// Pages
import About from './About'
import Description from "./Description";
import Testimonials from './Testimonials'

function AboutPage() {
  return (
    <div>
      
      <div className='backgroundImageAbout'>
        <About />
      </div>

      <div className=' descriptionBackground'>
        <Description />
      </div>
      <div className=' testimonialsBackground'>
        <Testimonials /> <hr/>
      </div>
      
    </div>
  )
}

export default AboutPage
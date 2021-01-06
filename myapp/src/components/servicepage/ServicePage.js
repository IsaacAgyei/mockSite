import React from 'react'
import '../../styles/App.css'
import AccountingServices from './AccountingServices'
import ServicesAbout from './ServicesAbout'

function ServicePage() {
  return (
    <div>
      
      <div className='backgroundImageServices' >
        <ServicesAbout />
      </div>

      <div className='servicesBackgroundColour'>
        <AccountingServices />
      </div>
      
    </div>
  )
}

export default ServicePage
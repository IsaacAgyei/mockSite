import React from 'react'
import '../../styles/App.css'
import "../../styles/PriceCard.css";
import PriceAbout from './PriceAbout'
import Prices from './Prices'


function PricePage() {

  return (
    <div>

      <div className='backgroundImagePrices'>
        <PriceAbout />
      </div>

      <div className='pricesBackground'>
        <Prices />
      </div>

    </div>
  )
}

export default PricePage
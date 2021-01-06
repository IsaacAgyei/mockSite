import React from 'react';
import PriceCards from '../pricepage/PriceCards';
import { Grid } from  '@material-ui/core'
import "../../styles/PriceCard.css";

function Prices() {

  const bronzeDetails = ['Up to 50 Transactions']
  const silverDetails = ['Up to 150 Transactions']
  const goldDetails = ['Up to 200 Transactions']
  const diamondDetails = ['Up to 300 Transactions']
  const packageCost = ['$250','$695','$950','$1450',]
  const packageArray = [bronzeDetails, silverDetails, goldDetails, diamondDetails]
  const priceHeader = ['Bronze Package','Silver Package','Gold Package','Diamond Package']
  const priceCardBackgroundColour = ['bronzeGradientColour','silverGradientColour','goldGradientColour','diamondGradientColour']

  const pricingPackageDetailes = [
                                  'QuickBooks Online',
                                  'QuickBooks Online Mobile App',
                                  'Monthly Bank Reconciliations',
                                  'Sales Tax (HST/GST) Filing',
                                  'Annual Financial Statements Review',
                                  'Corporate Tax Guidance – Included'
                                 ]

  const payrollPackageDetails = [
                                  'Online Pay Statements',
                                  'Direct Deposit',
                                  'Year End T4 Slips',
                                  'Payroll Remittance',
                                  'ROE Preparation and Filing',
                                  '$100 One Time Setup fee',
                                ]

  return (
    <div>

      <Grid container justify='center' alignItems='center'>
        <Grid item>
          <h1 className='primaryHeaderText'><span style={{color:'#d29122', fontWeight:'bolder'}}>Choose </span> <span style={{color:'#0db6d1', fontWeight:'bolder'}}>Your</span>  <span style={{color:'#c23409', fontWeight:'bolder'}}>Plan</span></h1>
        </Grid>
      </Grid>

      <Grid container justify='center' alignItems='center'>
        <Grid item>
          <p className='fontSizes'> There are no other hidden fees or fixed term contracts, you can cancel at anytime for any reason! </p>
        </Grid>
      </Grid>

      <Grid container alignItems='center' justify='center'>
          {
            priceHeader.map((value, index) => {
              return ( <Grid item >
                        <PriceCards 
                          titleHeader= { value }
                          costGradientColor= { priceCardBackgroundColour[index] }
                          pkgDetails= { packageArray[index].concat(pricingPackageDetailes) }
                          pkgDetailsCss= {'packageDetails'}
                          cost= { packageCost[index] }
                          key={index}
                        />
                      </Grid>
                    )
            })
          }

        <Grid item>
          <PriceCards 
              titleHeader= { 'Payroll Package' }
              costGradientColor= {'payrollGradientColour'}
              pkgDetails= { payrollPackageDetails }
              pkgDetailsCss= {'packageDetails'}
              cost= {'$70'}
              cycle= {' $8/per employee + per month'}
            />
        </Grid>
      </Grid>
    </div>
  )
}

export default Prices
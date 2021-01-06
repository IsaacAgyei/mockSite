import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ProductCards from './ProductCards'
import accountingSML from '../../images/accountingSML.jpg'
import numbersSML from '../../images/numbersSML.jpg'
import additionalServiceHomePAgeSML from '../../images/additionalServiceHomePAgeSML.jpg'

const useStyle = makeStyles({
  flexibility: {
    flexGrow: 1,
  },
  root: {
    width: 250,
    backgroundColor: 'wheat',
  },
  media: {
    height: 200,
  },
  headerSpecs: {
    fontSize: 25 ,
    fontWeight: 900 ,
  },
})

function Products() {
  const classes = useStyle()
  return (
    <div className={classes.flexibility}>
      
        <Grid container justify='center' alignItems='center'>
          <h1 className='primaryHeaderText'><span style={{color:'#d29122', fontWeight:'bolder'}}>How</span> <span style={{color:'#0db6d1', fontWeight:'bolder'}}>Can</span> We <span style={{color:'#c23409', fontWeight:'bolder'}}>Help</span></h1>
        </Grid>

        <Grid container justify='center' alignItems='center'>
          <ProductCards 
            headerTitle = 'Accounting Services'
            mediaImage = {accountingSML}
            rootClass = {classes.root}
            mediaClass = {classes.media}
            />

          <ProductCards 
            headerTitle = 'Bookkeeping Services'
            mediaImage = {numbersSML}
            rootClass = {classes.root}
            mediaClass = {classes.media}
            />

          <ProductCards 
            headerTitle = 'Additional Services'
            mediaImage = {additionalServiceHomePAgeSML}
            rootClass = {classes.root}
            mediaClass = {classes.media}
            />
      </Grid>
    </div>
  )
}

export default Products
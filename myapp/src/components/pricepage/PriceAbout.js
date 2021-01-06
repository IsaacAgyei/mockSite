import React from 'react'
import { Grid, Typography } from  '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import "../../styles/PriceCard.css";

const useStyles = makeStyles({
  root: {
    fontSize: 50,
    borderStyle: 'solid' ,
    borderBottom: 20,
    padding: 20,
    borderWidth: 'thick',
  },
})


function PriceAbout() {

  const classes = useStyles()

return (
  <Grid container direction="row" justify="center" alignItems="center" className='content'>
      <Grid item >
        <Typography component={'div'}>
          <div>
            <h1 className={classes.root}>Prices</h1>
          </div>
        </Typography>
      </Grid>
    </Grid>
  )
}

export default PriceAbout